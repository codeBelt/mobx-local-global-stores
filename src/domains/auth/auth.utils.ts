import { ApolloCache, FetchResult } from '@apollo/client';
import { toastSuccessMessage } from 'domains/toasts/toasts.utils';
import { initializeApollo } from 'apollo/apolloClient';
import { GetAuthDocument, GetAuthQuery } from './getAuth.graphql';
import { SignInMutation } from './signIn.graphql';

export const signOut = () => {
  const client = initializeApollo();

  // Example of writing to the cache without using Reactive variables
  client.cache.writeQuery<GetAuthQuery>({
    data: {
      auth: {
        isAuthenticated: false,
        userFullName: '',
      },
    },
    query: GetAuthDocument,
  });
};

export const signInUpdate = (cache: ApolloCache<SignInMutation>, { data }: FetchResult<SignInMutation>) => {
  toastSuccessMessage(`Welcome ${data?.signIn?.userFullName}`);

  // Example of writing to the cache without using Reactive variables
  cache.writeQuery<GetAuthQuery>({
    data: {
      auth: {
        isAuthenticated: Boolean(data?.signIn?.isAuthenticated),
        userFullName: data?.signIn?.userFullName ?? '',
      },
    },
    query: GetAuthDocument,
  });
};
