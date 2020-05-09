import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const commonConfig: webpack.Configuration = {
  entry: './src/index.tsx',

  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

export { commonConfig };
