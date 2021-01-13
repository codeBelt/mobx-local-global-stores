import environment, { Environment } from './base';

const baseApi = 'https://api.tvmaze.com';
const env = environment(baseApi);

const developmentEnv: Environment = {
  ...env,
  // override anything that gets added from base.
};

export default developmentEnv;
