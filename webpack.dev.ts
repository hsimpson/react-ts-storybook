import { commonConfig } from './webpack.config';
import merge from 'webpack-merge';
import path from 'path';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  //watch: true,
  devServer: {
    contentBase: './dist',
    open: true,
  },
});

export default devConfig;
