import environment, { Environment } from './base';

/*
 * base.ts is the default environment for production.
 * You shouldn't have to override anything.
 */

const baseApi = 'https://api.tvmaze.com';
const env = environment(baseApi);

const productionEnv: Environment = {
  ...env,
};

export default productionEnv;
