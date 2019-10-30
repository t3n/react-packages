const tsxTemplate = (
  { template }: any,
  opts: any,
  { imports, componentName, props, jsx, exports }: any
) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `;
};

export default tsxTemplate;
