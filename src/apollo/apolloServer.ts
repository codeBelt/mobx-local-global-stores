import { ApolloServer } from 'apollo-server-micro';
import { ShowsAPI } from './shows/shows.datasource';
import { AuthenticationAPI } from './auth/auth.datasource';
import { schema } from './schema';

export const apolloServer = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      showsAPI: new ShowsAPI(),
      authAPI: new AuthenticationAPI(),
    };
  },
  context: () => {
    return {
      token: 'foo',
    };
  },
});
