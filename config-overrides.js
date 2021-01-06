const path = require('path');
const { removeModuleScopePlugin } = require("customize-cra");



module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@mockups': path.resolve(__dirname, 'mockups'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@layouts': path.resolve(__dirname, 'src/features/layouts'),
      '@UI': path.resolve(__dirname, 'src/features/UI'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  };
  removeModuleScopePlugin()(config);
  return config;
};
