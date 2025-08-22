/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { transform } from '@svgr/core';
import chalk from 'chalk';
import { ESLint } from 'eslint';
import fs from 'fs-extra';
import path from 'path';

import materialIconsConfig from '../../materialicons.config.json';
import template from './template';

const eslint = new ESLint({ fix: true });

interface MaterialIconsConfig {
  renameRules: {
    [key: string]: string;
  };
  ignoreFolders: string[];
  defaultStyle: string;
}

interface IconComponent {
  name: string;
  path: string;
  reactComponent: string;
}

interface IconComponents {
  [any: string]: IconComponent;
}

interface FolderContents {
  dirs: string[];
  files: string[];
}

const SVG_FOLDER_PATH = path.resolve(__dirname, '../svg');
const COMPONENTS_FOLDER_PATH = path.resolve(__dirname, '../components');
const MATERIAL_COMPONENTS_FOLDER_PATH = path.join(
  COMPONENTS_FOLDER_PATH,
  '/material',
);
const MATERIAL_ICONS_FOLDER_PATH = path.resolve(
  __dirname,
  '../../../../node_modules/@material-design-icons/svg',
);
const INDEX_FILE_PATH = path.join(COMPONENTS_FOLDER_PATH, 'index.ts');

const capitalizeString = (str: string) =>
  str
    .split('')
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join('');

const readDirectoryContents = async (dir: string): Promise<FolderContents> => {
  const childNames: string[] = await fs.readdir(dir);

  const childPaths = childNames.map((name) => path.resolve(dir, name));

  return childPaths.reduce(
    async (reduced, childPath) => {
      const { dirs: reducedDirs, files: reducedFiles } = await reduced;
      const stat = await fs.stat(childPath);
      const isDir = await stat.isDirectory();

      return Promise.resolve({
        dirs: isDir ? [...reducedDirs, childPath] : reducedDirs,
        files: !isDir ? [...reducedFiles, childPath] : reducedFiles,
      });
    },
    Promise.resolve<FolderContents>({ dirs: [], files: [] }),
  );
};

const getPathEnd = (filePath: string) => (filePath.match(/[^/]+$/) || [''])[0];

const generateComponentName = (fileName: string) => {
  let componentName = getPathEnd(fileName)
    .replace('.svg', '')
    .split(/[^A-Za-z0-9äöüß]+/)
    .map((word) => capitalizeString(word))
    .join('');

  // Handle component names that start with numbers by prefixing with 'Icon'
  if (/^\d/.test(componentName)) {
    componentName = `Icon${componentName}`;
  }

  return componentName;
};

const filterFilesBySvg = (files: string[]) =>
  files.filter((file) => /\.svg$/.test(file));

const svgToReactComponent = async (svg: string, componentName: string) => {
  const component = await transform(
    svg,
    {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      icon: true,
      typescript: true,
      template,
    },
    { componentName },
  );

  const formatted = await eslint.lintText(
    component.replace(
      `const ${componentName}`,
      `const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>>`,
    ),
  );

  return formatted[0].output as string;
};

const generateIconComponents = async (
  dir: string,
  recursive?: boolean,
): Promise<IconComponent[]> => {
  const { dirs: childDirs, files } = await readDirectoryContents(dir);

  const svgFiles = filterFilesBySvg(files);

  const svgComponents = await Promise.all(
    svgFiles.map(async (svgPath) => {
      const componentName = generateComponentName(svgPath);

      console.log(
        `Generating ${chalk.black.bgWhite(
          componentName,
        )} icon component from ${svgPath.replace(SVG_FOLDER_PATH, '')}`,
      );

      const svg = await fs.readFile(svgPath, 'utf8');
      const reactComponent = await svgToReactComponent(svg, componentName);

      const filePath = svgPath
        .replace(SVG_FOLDER_PATH, '')
        .replace(getPathEnd(svgPath), '');
      const componentPath = path.join(
        COMPONENTS_FOLDER_PATH,
        filePath,
        `${componentName}.tsx`,
      );

      return {
        name: componentName,
        path: componentPath,
        reactComponent,
      };
    }),
  );

  if (recursive)
    return (
      await Promise.all(
        childDirs.map((childDir) => generateIconComponents(childDir)),
      )
    ).reduce(
      (reducedComponents, components) => [...reducedComponents, ...components],
      [],
    );

  return svgComponents;
};

const generateMaterialIconComponents = async (): Promise<IconComponent[]> => {
  // Use the configured default style (e.g., 'filled') to maintain backward compatibility
  const defaultStyle =
    (materialIconsConfig as MaterialIconsConfig).defaultStyle || 'filled';
  const styleFolderPath = path.resolve(
    MATERIAL_ICONS_FOLDER_PATH,
    defaultStyle,
  );

  console.log(`Using Material Icons style: ${defaultStyle}`);

  const { files } = await readDirectoryContents(styleFolderPath);
  const svgFiles = files.filter((filePath) => /\.svg$/.test(filePath));

  console.log(`Found ${svgFiles.length} Material Icons to process`);

  // Keep track of seen component names to avoid duplicates
  const seenComponents = new Set<string>();

  const components = await Promise.all(
    svgFiles.map(async (svgPath) => {
      try {
        const svg = await fs.readFile(svgPath, 'utf8');
        const fileName = getPathEnd(svgPath).replace('.svg', '');
        const baseComponentName = generateComponentName(fileName);

        // Apply rename rules if any exist
        const componentName =
          (materialIconsConfig as MaterialIconsConfig).renameRules[
            baseComponentName
          ] || baseComponentName;

        // Skip duplicates to prevent case sensitivity issues
        if (seenComponents.has(componentName.toLowerCase())) {
          console.log(`Skipping duplicate component: ${componentName}`);
          return null;
        }
        seenComponents.add(componentName.toLowerCase());

        console.log(
          `Generating ${chalk.black.bgWhite(
            componentName,
          )} component from Material Icons`,
        );

        const reactComponent = await svgToReactComponent(svg, componentName);

        // Store components directly in the material folder (no subfolders) to maintain compatibility
        const fileDest = path.join(
          MATERIAL_COMPONENTS_FOLDER_PATH,
          `${componentName}.tsx`,
        );

        return {
          name: componentName,
          path: fileDest,
          reactComponent,
        };
      } catch (error) {
        console.error(`Error processing ${svgPath}:`, error);
        return null;
      }
    }),
  );

  // Filter out any failed components
  return components.filter(
    (component) => component !== null,
  ) as IconComponent[];
};

const writeComponents = async (components: IconComponents) => {
  return Promise.all(
    Object.values(components).map(({ path: fileDest, reactComponent }) => {
      return fs.outputFile(fileDest, reactComponent);
    }),
  );
};

const getComponentPrefix = (filePath: string) =>
  capitalizeString(
    filePath
      .substr(COMPONENTS_FOLDER_PATH.length + 1, filePath.length)
      .split('/')[0],
  );

const prefixComponentName = (componentName: string, prefix: string) =>
  prefix + componentName;

const getPrefixedComponentName = (component: IconComponent) =>
  prefixComponentName(component.name, getComponentPrefix(component.path));

const createIndexFile = async (components: IconComponents) => {
  const index = [
    ...Object.values(components).sort((a, b) =>
      // eslint-disable-next-line no-nested-ternary
      a.path < b.path ? -1 : a.path > b.path ? 1 : 0,
    ),
  ]
    .map((component) => {
      const indexEntryPath = component.path
        .replace(COMPONENTS_FOLDER_PATH, '')
        .replace('.tsx', '');

      return `export { default as ${prefixComponentName(
        component.name,
        getComponentPrefix(component.path),
      )} } from '.${indexEntryPath}';`;
    })
    .join('\n');

  const formatted = await eslint.lintText(index);
  const formattedIndex = formatted[0].output as string;
  await fs.writeFile(INDEX_FILE_PATH, formattedIndex);
};

const generate = async () => {
  try {
    await fs.remove(COMPONENTS_FOLDER_PATH);

    const iconComponents = await generateIconComponents(SVG_FOLDER_PATH, true);
    const materialIconComponents = await generateMaterialIconComponents();

    const components: IconComponents = {};

    [...iconComponents, ...materialIconComponents].forEach((component) => {
      const prefixedComponentName = getPrefixedComponentName(component);

      if (components[prefixedComponentName])
        console.warn(
          `${chalk.black.bgYellow('Warning:')} Component ${chalk.black.bgWhite(
            prefixedComponentName,
          )} already exists!`,
        );

      components[prefixedComponentName] = component;
    });

    await writeComponents(components);
    await createIndexFile(components);

    console.log(chalk.green('Finished generating icon components!'));
  } catch (err) {
    console.error(err);
  }
};

generate();
