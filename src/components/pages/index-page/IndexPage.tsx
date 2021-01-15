import React, { useEffect, useState } from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { MainOverview } from './main-overview/MainOverview';
import { Actors } from './actors/Actors';
import { observer } from 'mobx-react-lite';
import { IndexPageStore } from './IndexPage.store';

interface IProps {}

export const IndexPage: React.FC<IProps> = observer((props) => {
  const [localStore] = useState(IndexPageStore());

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  return (
    <LoadingIndicator isActive={localStore.isRequesting}>
      <MainOverview localStore={localStore} />
      <Divider horizontal={true}>
        <Header as="h4">
          <Icon name="users" /> Cast
        </Header>
      </Divider>
      <Actors localStore={localStore} />
    </LoadingIndicator>
  );
});
