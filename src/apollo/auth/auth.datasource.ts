import { RESTDataSource } from 'apollo-datasource-rest';
import { Auth } from 'apollo/type-defs.graphqls';
import environment from 'environment';
import { authReducer } from './auth.reducers';

export class AuthenticationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.api.userBase;
  }

  async authenticateUser(showId: string): Promise<Auth> {
    const randomUser = await this.get(
      `?inc=gender,name` // path
    );

    return authReducer(randomUser);
  }
}
