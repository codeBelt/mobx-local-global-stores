import { ApolloServer } from 'apollo-server-micro';
import { ShowsAPI } from './shows/shows.datasource';
import { schema } from './schema';

export const apolloServer = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      showsAPI: new ShowsAPI(),
    };
  },
  context: () => {
    return {
      token: 'foo',
    };
  },
});
