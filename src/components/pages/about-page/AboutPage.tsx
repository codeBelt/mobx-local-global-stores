import React from 'react';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { Container, Header, Message } from 'semantic-ui-react';
import { useGetEpisodesByShowIdQuery } from 'domains/shows/getEpisodesByShowId.graphql';
import { toastErrorMessage } from 'domains/toasts/toasts.utils';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  const { data, error, loading } = useGetEpisodesByShowIdQuery({
    variables: {
      halp: 'me -- I caused an error',
    },
  });

  if (error) {
    toastErrorMessage(error?.message);
  }

  return (
    <div>
      <Header as="h2">About</Header>
      <LoadingIndicator isActive={loading}>
        <Container>
          <p>This page is only to show how to handle API errors on the page.</p>
          <p>You will also notice a popup indicator with the actual error text.</p>
          <p>Below we create a custom error message.</p>
        </Container>
        {Boolean(error) && (
          <Message info={true} header="Error" content="Sorry there was an error requesting this content." />
        )}
      </LoadingIndicator>
    </div>
  );
};

AboutPage.displayName = 'AboutPage';
AboutPage.defaultProps = {};
