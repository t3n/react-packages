// const tsxTemplate = (
//   { template }: any,
//   opts: any,
//   { componentName, jsx }: any
// ) => {
//   const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
//   return typeScriptTpl.ast`
//     import React from 'react';
//     const ${componentName}: React.ComponentType<React.SVGProps<SVGSVGElement>> = (props) => ${jsx};
//     export default ${componentName};
//   `;
// };

const template = (variables: any, { tpl }: any) => {
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

export default template;
