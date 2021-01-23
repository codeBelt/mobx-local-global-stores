import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useGlobalStore } from '../global-store-provider/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';
import { AuthDocument, AuthQuery, useAuthQuery, useSignInMutation } from 'lib/auth/auth.graphql';

import { useApolloClient } from '@apollo/client';

export interface IProps {}

export const SignInModal: React.FC<IProps> = observer((props) => {
  const { authStore } = useGlobalStore();
  const authCache = useAuthQuery();
  const [signIn, auth] = useSignInMutation({
    // update: (cache, { data }) => signIn(data),

    update: (cache, { data }) => {
      cache.writeQuery<AuthQuery>({
        data: {
          auth: {
            isAuthenticated: Boolean(data?.signIn?.isAuthenticated),
            userFullName: data?.signIn?.userFullName ?? '',
            user: {
              name: {
                first: data?.signIn?.user?.name?.first ?? '',
              },
              gender: data?.signIn?.user?.gender ?? '',
            },
          },
        },
        query: AuthDocument,
      });
    },
  });

  return (
    <Modal
      closeOnDimmerClick={false}
      closeOnEscape={false}
      open={!authCache?.data?.auth?.isAuthenticated}
      size={'tiny'}
    >
      <Modal.Header>Sign In</Modal.Header>
      <Modal.Content>
        <p>Welcome, please sign in.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Sign In"
          labelPosition="right"
          icon="sign in"
          // onClick={() => authStore.signIn()}
          onClick={() => signIn()}
          positive={true}
          disabled={authStore.authResults.isRequesting}
          loading={authStore.authResults.isRequesting}
        />
      </Modal.Actions>
    </Modal>
  );
});

SignInModal.displayName = 'SignInModal';
SignInModal.defaultProps = {};
