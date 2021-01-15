import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useGlobalStore } from '../../../stores/GlobalStore.utils';
import { observer } from 'mobx-react-lite';

export interface IProps {}

export const SignInModal: React.FC<IProps> = observer((props) => {
  const { authStore } = useGlobalStore();

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
          onClick={() => authStore.signIn()}
          positive={true}
          disabled={authStore.authResults.isRequesting}
          loading={authStore.authResults.isRequesting}
        />
      </Modal.Actions>
    </Modal>
  );
});

SignInModal.defaultProps = {};
