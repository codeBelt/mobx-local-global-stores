import environment, { Environment } from './base';

/*
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */

const env = environment();

const developmentEnv: Environment = {
  ...env,
  // override anything that gets added from base.
};

export default developmentEnv;
