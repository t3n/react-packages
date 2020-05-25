const tsxTemplate = (
  { template }: any,
  opts: any,
  { componentName, jsx }: any
) => {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  return typeScriptTpl.ast`
    import React from 'react';
    const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ${jsx};
    export default ${componentName};
  `;
};

export default tsxTemplate;
