const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.alias['styled-components'] = path.resolve(
    './node_modules/styled-components'
  );

  return config;
};
