const path = require('path');
const { removeModuleScopePlugin, addWebpackAlias } = require("customize-cra");



module.exports = function override(config) {
  addWebpackAlias({
    ['@src']: path.resolve(__dirname, "src"),
    ['@mockups']: path.resolve(__dirname, "mockups"),
    ['@config']: path.resolve(__dirname, 'src/config'),
    ['@constants']: path.resolve(__dirname, 'src/constants'),
    ['@interfaces']: path.resolve(__dirname, 'src/interfaces'),
    ['@layouts']: path.resolve(__dirname, 'src/features/layouts'),
    ['@UI']: path.resolve(__dirname, 'src/features/UI'),
    ['@pages']: path.resolve(__dirname, 'src/pages'),
    ['@partials']: path.resolve(__dirname, 'src/features/partials'),
    ['@images']: path.resolve(__dirname, "src/images"),
  })(config);
  removeModuleScopePlugin()(config);
  return config;
};
