import environment, { Environment } from './base';

/*
 * base.ts is the default environment for production.
 * You shouldn't have to override anything.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */

const env = environment();

const productionEnv: Environment = {
  ...env,
};

export default productionEnv;
