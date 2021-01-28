import { QueryResolvers, MutationResolvers, Auth, Show, Resolvers, CastResolvers, ShowResolvers } from './type-defs.graphqls'
import { getUserRequest } from 'domains/auth/auth.services'

export const resolvers: Resolvers = {
  Query: {
    auth(_parent, _args, _context, _info): Auth {
      return {
        isAuthenticated: false,
        userFullName: ''
      }
    },
    cast: async (_parent, _args, _context, _info) => {
      return  _context.dataSources.showsAPI.getCast(_args.showId);
    },
    show: async (_parent, _args, _context, _info) => {
      return _context.dataSources.showsAPI.getShowDetails(_args.showId);
    },
    episodes: async (_parent, _args, _context, _info) => {
      return _context.dataSources.showsAPI.getEpisodes(_args.showId);
    },
  },
  Mutation: {
    signIn: async (_parent, _args, _context, _info): Promise<Auth> => {
      const randomUser = await getUserRequest()

      return {
        isAuthenticated: Boolean(randomUser.data),
        userFullName: `${randomUser.data?.results[0]?.name?.first} ${randomUser.data?.results[0]?.name?.last}`,
      }
    }
  },
}
