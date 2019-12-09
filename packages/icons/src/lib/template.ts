const tsxTemplate = (
  { template }: any,
  opts: any,
  { componentName, jsx }: any
) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `;
};

export default tsxTemplate;
