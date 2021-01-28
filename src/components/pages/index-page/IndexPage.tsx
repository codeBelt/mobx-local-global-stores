import React from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { MainOverview } from './main-overview/MainOverview';
import { Actors } from './actors/Actors';
import { defaultShowId } from 'constants/shows.constants';
import { useGetShowDetailsAndCastByShowIdQuery } from 'domains/shows/getShowDetailsAndCastByShowId.graphql';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  const { loading } = useGetShowDetailsAndCastByShowIdQuery({
    variables: {
      showId: defaultShowId,
    },
  });

  return (
    <LoadingIndicator isActive={loading}>
      <MainOverview />
      <Divider horizontal={true}>
        <Header as="h4">
          <Icon name="users" /> Actors
        </Header>
      </Divider>
      <Actors />
    </LoadingIndicator>
  );
};

IndexPage.displayName = 'IndexPage';
IndexPage.defaultProps = {};
