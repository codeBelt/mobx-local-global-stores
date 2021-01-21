import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'

const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return userProfile
  },
  auth(_parent, _args, _context, _info) {
    return {
      isAuthenticated: false,
      user: {
        gender: 'female',
        name: {
          title: 'Lil',
          first: 'Wayne',
          last: 'Carter'       
        }
      },
      userFullName: 'Wayne Carter'
    }
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    userProfile.name = _args.name
    return userProfile
  },

  signIn(_parent, _args, _context, _info) {
    return {
      isAuthenticated: true,
      user: {
        gender: 'male',
        name: {
          title: 'Dr',
          first: 'Ron',
          last: 'Brunkow'       
        }
      },
      userFullName: 'Ron Brunkow'
    }
  }
}

export default { Query, Mutation }
