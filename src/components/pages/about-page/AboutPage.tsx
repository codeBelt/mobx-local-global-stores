import React, { useEffect, useState } from 'react';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { Container, Header, Message } from 'semantic-ui-react';
import { AboutPageStore } from './AboutPage.store';
import { observer } from 'mobx-react-lite';

interface IProps {}

export const AboutPage: React.FC<IProps> = observer((props) => {
  const [localStore] = useState(AboutPageStore());

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  return (
    <div>
      <Header as="h2">About</Header>
      <LoadingIndicator isActive={localStore.errorExampleResults.isRequesting}>
        <Container>
          <p>
            This page is only to show how to handle API errors on the page. You will also notice a popup indicator with
            the actual error text. Below we create a custom error message.
          </p>
        </Container>
        {Boolean(localStore.errorExampleResults.error) && (
          <Message info={true} header="Error" content="Sorry there was an error requesting this content." />
        )}
      </LoadingIndicator>
    </div>
  );
});
