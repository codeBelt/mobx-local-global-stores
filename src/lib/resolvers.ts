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
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    userProfile.name = _args.name
    return userProfile
  },
  // signIn(_parent, _args, _context, _info) {
  //   return {
  //     id: String(1),
  //     name: 'John Smith',
  //     status: 'cached',
  //   }
  // }
}

export default { Query, Mutation }
