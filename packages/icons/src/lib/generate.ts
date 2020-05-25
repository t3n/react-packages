import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import prettier from 'prettier';
import svgr from '@svgr/core';

import template from './template';
import materialIconsConfig from '../../materialicons.config.json';

interface MaterialIconsConfig {
  renameRules: {
    [key: string]: string;
  };
  ignoreFolders: string[];
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
  '/material'
);
const MATERIAL_ICONS_FOLDER_PATH = path.resolve(
  __dirname,
  '../../../../node_modules/material-design-icons'
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
    Promise.resolve<FolderContents>({ dirs: [], files: [] })
  );
};

const getPathEnd = (filePath: string) => (filePath.match(/[^/]+$/) || [''])[0];

const generateComponentName = (fileName: string) =>
  getPathEnd(fileName)
    .replace('.svg', '')
    .split(/[^A-Za-z0-9äöüß]+/)
    .map((word) => capitalizeString(word))
    .join('');

const filterFilesBySvg = (files: string[]) =>
  files.filter((file) => /\.svg$/.test(file));

const svgToReactComponent = async (svg: string, componentName: string) => {
  const component = await svgr(
    svg,
    {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      icon: true,
      typescript: true,
      template,
    },
    { componentName }
  );

  return prettier.format(
    component.replace(
      `const ${componentName}`,
      `const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>>`
    ),
    { singleQuote: true, parser: 'typescript' }
  );
};

const generateIconComponents = async (
  dir: string,
  recursive?: boolean
): Promise<IconComponent[]> => {
  const { dirs: childDirs, files } = await readDirectoryContents(dir);

  const svgFiles = filterFilesBySvg(files);

  const svgComponents = await Promise.all(
    svgFiles.map(async (svgPath) => {
      const componentName = generateComponentName(svgPath);

      console.log(
        `Generating ${chalk.black.bgWhite(
          componentName
        )} icon component from ${svgPath.replace(SVG_FOLDER_PATH, '')}`
      );

      const svg = await fs.readFile(svgPath, 'utf8');
      const reactComponent = await svgToReactComponent(svg, componentName);

      const filePath = svgPath
        .replace(SVG_FOLDER_PATH, '')
        .replace(getPathEnd(svgPath), '');
      const componentPath = path.join(
        COMPONENTS_FOLDER_PATH,
        filePath,
        `${componentName}.tsx`
      );

      return {
        name: componentName,
        path: componentPath,
        reactComponent,
      };
    })
  );

  if (recursive)
    return (
      await Promise.all(
        childDirs.map((childDir) => generateIconComponents(childDir))
      )
    ).reduce(
      (reducedComponents, components) => [...reducedComponents, ...components],
      []
    );

  return svgComponents;
};

const generateMaterialIconComponents = async (): Promise<IconComponent[]> => {
  const { dirs } = await readDirectoryContents(MATERIAL_ICONS_FOLDER_PATH);

  const categoryNames = dirs
    .filter(
      (dirPath) =>
        !(materialIconsConfig as MaterialIconsConfig).ignoreFolders.filter(
          (categoryName) => dirPath.indexOf(categoryName) > -1
        ).length
    )
    .map((dirPath) => getPathEnd(dirPath));

  const categoryFiles = await Promise.all(
    categoryNames.map(async (categoryName) => {
      const { files } = await readDirectoryContents(
        path.resolve(MATERIAL_ICONS_FOLDER_PATH, categoryName, 'svg/production')
      );

      return files.filter((filePath) => /24px\.svg$/.test(filePath));
    })
  );
  const svgFiles = categoryFiles.reduce(
    (allFiles, files) => [...allFiles, ...files],
    []
  );

  return Promise.all(
    svgFiles.map(async (svgPath) => {
      const svg = await fs.readFile(svgPath, 'utf8');
      const componentName = [
        generateComponentName(svgPath).replace('Ic', '').replace('24px', ''),
      ].map(
        (name) =>
          (materialIconsConfig as MaterialIconsConfig).renameRules[name] || name
      )[0];

      console.log(
        `Generating ${chalk.black.bgWhite(
          componentName
        )} component from Material Icons`
      );

      const categoryName = svgPath.split('/').reverse()[3];
      const reactComponent = await svgToReactComponent(svg, componentName);
      const fileDest = path.join(
        MATERIAL_COMPONENTS_FOLDER_PATH,
        categoryName,
        `${componentName}.tsx`
      );

      return {
        name: componentName,
        path: fileDest,
        reactComponent,
      };
    })
  );
};

const writeComponents = async (components: IconComponents) => {
  return Promise.all(
    Object.values(components).map(({ path: fileDest, reactComponent }) => {
      return fs.outputFile(fileDest, reactComponent);
    })
  );
};

const getComponentPrefix = (filePath: string) =>
  capitalizeString(
    filePath
      .substr(COMPONENTS_FOLDER_PATH.length + 1, filePath.length)
      .split('/')[0]
  );

const prefixComponentName = (componentName: string, prefix: string) =>
  prefix + componentName;

const getPrefixedComponentName = (component: IconComponent) =>
  prefixComponentName(component.name, getComponentPrefix(component.path));

const createIndexFile = async (components: IconComponents) => {
  const index = [
    ...Object.values(components).sort((a, b) =>
      a.path < b.path ? -1 : a.path > b.path ? 1 : 0
    ),
  ]
    .map((component) => {
      const indexEntryPath = component.path
        .replace(COMPONENTS_FOLDER_PATH, '')
        .replace('.tsx', '');

      return `export { default as ${prefixComponentName(
        component.name,
        getComponentPrefix(component.path)
      )} } from '.${indexEntryPath}';`;
    })
    .join('\n');

  const prettierOptions = await prettier.resolveConfig(__dirname);
  const formattedIndex = await prettier.format(index, {
    ...(prettierOptions || {}),
    parser: 'babel',
  });
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
            prefixedComponentName
          )} already exists!`
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
