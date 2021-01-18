import React from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { MainOverview } from './main-overview/MainOverview';
import { Actors } from './actors/Actors';
import { observer } from 'mobx-react-lite';
import { IndexPageStore } from './IndexPage.store';
import { useLocalStore } from '../../shared/local-store-provider/LocalStoreProvider';

interface IProps {}

export const IndexPage: React.FC<IProps> = observer((props) => {
  const localStore = useLocalStore<IndexPageStore>();

  return (
    <LoadingIndicator isActive={localStore.isRequesting}>
      <MainOverview />
      <Divider horizontal={true}>
        <Header as="h4">
          <Icon name="users" /> Actors
        </Header>
      </Divider>
      <Actors />
    </LoadingIndicator>
  );
});
