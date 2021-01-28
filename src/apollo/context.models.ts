import { AuthenticationAPI } from './auth/auth.datasource';
import { ShowsAPI } from './shows/shows.datasource';

export type ContextModel = {
  dataSources: {
    showsAPI: ShowsAPI;
    authAPI: AuthenticationAPI;
  };
};
