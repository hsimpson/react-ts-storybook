import webpack from 'webpack';

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions/register'],
  webpackFinal: async (config: webpack.Configuration) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
