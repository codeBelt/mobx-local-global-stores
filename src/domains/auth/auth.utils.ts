import { ApolloCache, FetchResult } from '@apollo/client';
import { toastSuccessMessage } from 'domains/toasts/toasts.utils';
import { initializeApollo } from 'lib/apolloClient';
import { AuthDocument, AuthQuery, SignInMutation, SignInMutationResult } from './auth.graphql';

export const signOut = () => {
  const client = initializeApollo();

  // Example of writing to the cache without using Reactive variables
  client.cache.writeQuery<AuthQuery>({
    data: {
      auth: {
        isAuthenticated: false,
        userFullName: '',
      },
    },
    query: AuthDocument,
  });
};

export const signInUpdate = (cache: ApolloCache<SignInMutation>, { data }: FetchResult<SignInMutation>) => {
  toastSuccessMessage(`Welcome ${data?.signIn?.userFullName}`);

  // Example of writing to the cache without using Reactive variables
  cache.writeQuery<AuthQuery>({
    data: {
      auth: {
        isAuthenticated: Boolean(data?.signIn?.isAuthenticated),
        userFullName: data?.signIn?.userFullName ?? '',
      },
    },
    query: AuthDocument,
  });
};

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
