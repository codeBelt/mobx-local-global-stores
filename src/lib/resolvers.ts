import { QueryResolvers, MutationResolvers, AuthResolvers, Auth, OldUser } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import { getUserRequest } from 'domains/auth/auth.services'
import { SigningOptions } from 'crypto'
import { SignInMutation } from './auth/auth.graphql'

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
      user: {
        gender: '',
        name: {
          title: '',
          first: '',
          last: ''       
        }
      },
      userFullName: ''
    }
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    userProfile.name = _args.name
    return userProfile
  },


  signIn: async (_parent, _args, _context, _info) => {
    const randomUser = await getUserRequest()

    return {
      isAuthenticated: Boolean(randomUser.data),
      userFullName: `${randomUser.data?.results[0]?.name?.first} ${randomUser.data?.results[0]?.name?.last}`,
      user: {
        gender: randomUser.data?.results[0]?.gender || '',
        name: {
          title: randomUser.data?.results[0]?.name?.title || '',
          first: randomUser.data?.results[0]?.name?.first || '',
          last: randomUser.data?.results[0]?.name?.last || ''
        }
      },
    }
  }
}

export default { Query, Mutation }
