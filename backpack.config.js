const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  webpack: (config, options) => {
    config.entry.main = ['./server/index.js'];

    config.plugins.push(
      new CopyWebpackPlugin(
        [
          {
            from: 'server/common/swagger/swagger.json',
            to: 'server/common/swagger/swagger.json',
          },
        ],
        options
      )
    );

    return config;
  },
};
