import { QueryResolvers, MutationResolvers, AuthResolvers, Auth, OldUser, Cast, Show } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import { getUserRequest } from 'domains/auth/auth.services'
import { getCastByShowId, getEpisodesByShowId, getShowByShowId } from './shows/shows.resolvers'

const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info): OldUser {
    return userProfile
  },
  auth(_parent, _args, _context, _info): Auth {
    return {
      isAuthenticated: false,
      userFullName: ''
    }
  },
  cast: getCastByShowId,
  show: getShowByShowId,
  episodes: getEpisodesByShowId,
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info): OldUser {
    userProfile.name = _args.name
    return userProfile
  },


  signIn: async (_parent, _args, _context, _info): Promise<Auth> => {
    const randomUser = await getUserRequest()

    return {
      isAuthenticated: Boolean(randomUser.data),
      userFullName: `${randomUser.data?.results[0]?.name?.first} ${randomUser.data?.results[0]?.name?.last}`,
    }
  }
}

export default { Query, Mutation }
