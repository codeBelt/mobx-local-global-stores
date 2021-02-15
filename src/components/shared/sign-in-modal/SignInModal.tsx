import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useGetAuthQuery } from 'domains/auth/getAuth.graphql';
import { useSignInMutation } from 'domains/auth/signIn.graphql';
import { signInUpdate } from 'domains/auth/auth.utils';

export interface IProps {}

export const SignInModal: React.FC<IProps> = (props) => {
  const { data, loading } = useGetAuthQuery();

  // Example of writing to the cache without using Reactive variables
  const [signIn] = useSignInMutation({
    update: signInUpdate,
  });

  return (
    <Modal closeOnDimmerClick={false} closeOnEscape={false} open={!data?.auth?.isAuthenticated} size={'tiny'}>
      <Modal.Header>Sign In</Modal.Header>
      <Modal.Content>
        <p>Welcome, please sign in.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Sign In"
          labelPosition="right"
          icon="sign in"
          onClick={() => signIn()}
          positive={true}
          disabled={loading}
          loading={loading}
        />
      </Modal.Actions>
    </Modal>
  );
};

SignInModal.displayName = 'SignInModal';
SignInModal.defaultProps = {};
