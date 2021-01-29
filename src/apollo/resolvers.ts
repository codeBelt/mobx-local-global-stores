import { Resolvers } from './type-defs.graphqls';

export const resolvers: Resolvers = {
  Query: {
    cast: async (_parent, _args, _context, _info) => {
      return _context.dataSources.showsAPI.getCast(_args.showId);
    },
    show: async (_parent, _args, _context, _info) => {
      return _context.dataSources.showsAPI.getShowDetails(_args.showId);
    },
    episodes: async (_parent, _args, _context, _info) => {
      return _context.dataSources.showsAPI.getEpisodes(_args.showId);
    },
  },
  Mutation: {
    signIn: async (_parent, _args, _context, _info) => {
      return _context.dataSources.authAPI.authenticateUser();
    },
  },
};
