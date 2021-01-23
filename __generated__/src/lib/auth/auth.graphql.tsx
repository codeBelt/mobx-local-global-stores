/* c77ebc2e2b94d2f767186e7c988db8599ade34e1
 * This file is automatically generated by graphql-let. */

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
  __typename?: 'Auth';
  isAuthenticated: Scalars['Boolean'];
  user: User;
  userFullName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  gender: Scalars['String'];
  name: UserName;
};

export type UserName = {
  __typename?: 'UserName';
  title: Scalars['String'];
  first: Scalars['String'];
  last: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  viewer: OldUser;
  auth: Auth;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateName: OldUser;
  signIn: Auth;
};


export type MutationUpdateNameArgs = {
  name: Scalars['String'];
};


export type MutationSignInArgs = {
  name?: Maybe<Scalars['String']>;
};

export type OldUser = {
  __typename?: 'OldUser';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = (
  { __typename?: 'Query' }
  & { auth: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'isAuthenticated' | 'userFullName'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'gender'>
      & { name: (
        { __typename?: 'UserName' }
        & Pick<UserName, 'first'>
      ) }
    ) }
  ) }
);

export type SignInMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'isAuthenticated' | 'userFullName'>
  ) }
);


export const AuthDocument = gql`
    query Auth {
  auth {
    isAuthenticated
    user {
      gender
      name {
        first
      }
    }
    userFullName
  }
}
    `;

/**
 * __useAuthQuery__
 *
 * To run a query within a React component, call `useAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthQuery(baseOptions?: Apollo.QueryHookOptions<AuthQuery, AuthQueryVariables>) {
        return Apollo.useQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
      }
export function useAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>) {
          return Apollo.useLazyQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
        }
export type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export type AuthQueryResult = Apollo.QueryResult<AuthQuery, AuthQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($name: String) {
  signIn(name: $name) {
    isAuthenticated
    userFullName
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;