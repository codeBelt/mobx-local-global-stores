import { QueryResolvers, MutationResolvers, Auth, Show, Resolvers } from './type-defs.graphqls'
import { getUserRequest } from 'domains/auth/auth.services'
import { getCastByShowId, getEpisodesByShowId } from './shows/shows.resolvers'
import { showMapper } from './shows/shows.mappers'

const resolvers: Resolvers = {
 Query: {
  auth(_parent, _args, _context, _info): Auth {
    return {
      isAuthenticated: false,
      userFullName: ''
    }
  },
  cast: getCastByShowId,
  // async (_parent, _args, _context, _info) => {
  //   return  getCastByShowId(_args.showId),

  //   _context.dataSources.showsAPI.getCast(_args.showId);
  // },
  show: async (_parent, _args, _context, _info) => {
    return _context.dataSources.showsAPI.getShowDetails(_args.showId);
  },
  episodes: getEpisodesByShowId,
},
Show: showMapper,
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


export default resolvers 
