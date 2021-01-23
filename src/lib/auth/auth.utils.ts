import { initializeApollo } from "lib/apollo"
import { Auth, AuthDocument, AuthQuery, SignInMutation, SignInMutationResult } from "./auth.graphql";

export const signOut = () => {
  const client = initializeApollo()

  client.cache.writeQuery<AuthQuery>({
    data: {
      auth: {
        isAuthenticated: false,
        userFullName: '',
      },
    },
    query: AuthDocument,
  });
}

// export const signIn = ( data: any) => {

//   const client = initializeApollo()
  
//   client.cache.writeQuery<AuthQuery>({
//     data: {
//       auth: {
//         isAuthenticated: Boolean(data?.signIn?.isAuthenticated),
//         userFullName: data?.signIn?.userFullName ?? '',
//       },
//     },
//     query: AuthDocument,
//   });
// }