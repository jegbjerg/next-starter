const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      'next/image': require.resolve('./__mocks__/NextJSImageMock.js'),
    };
    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];

    return config;
  },
};
