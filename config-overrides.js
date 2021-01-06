const path = require('path');

module.exports = function override(config) {
  // console.log(config);
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@mockups': path.resolve(__dirname, 'src/mockups')
    },
  };
  return config;
};