import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useGlobalStore } from '../global-store-provider/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';
import { useViewerQuery } from '../../../../__generated__/src/lib/viewer.graphql';
import { useAuthQuery, useSignInMutation } from 'lib/auth/auth.graphql';

export interface IProps {}

export const SignInModal: React.FC<IProps> = observer((props) => {
  const { authStore } = useGlobalStore();

  // const { data, loading, error } = useViewerQuery({
  //   variables: {},
  // });

  const { data, loading, error } = useAuthQuery();

  const [signIn, auth] = useSignInMutation();

  console.log(auth);
  console.log(data);

  return (
    <Modal closeOnDimmerClick={false} closeOnEscape={false} open={!authStore.isAuthenticated} size={'tiny'}>
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
