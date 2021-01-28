import { ApolloServer } from 'apollo-server-micro';
import { ShowsAPI } from 'lib/shows/shows.datasource';
import { schema } from '../../lib/schema';

const apolloServer = new ApolloServer({
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

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
