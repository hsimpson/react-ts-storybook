import { commonConfig } from './webpack.config';
import merge from 'webpack-merge';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  // TODO: optimization
  //watch: true,
});

export default prodConfig;
