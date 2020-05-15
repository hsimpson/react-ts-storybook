const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  // 1. register the docs panel (as opposed to '@storybook/addon-docs' which
  //    will configure everything with a preset)
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            // Provide the path to your tsconfig.json so that your stories can
            // display types from outside each individual story.
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};