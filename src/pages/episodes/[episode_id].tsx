import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { EpisodesPage } from '../../components/pages/episodes-page/EpisodesPage';
import { LocalStoreProvider } from '../../components/shared/local-store-provider/LocalStoreProvider';
import { EpisodesPageStore } from '../../components/pages/episodes-page/EpisodesPage.store';

interface IProps {}

const EpisodesRoute: NextPage<IProps> = (props) => {
  const [localStore] = useState(EpisodesPageStore());

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  return (
    <LocalStoreProvider localStore={localStore}>
      <EpisodesPage />
    </LocalStoreProvider>
  );
};

EpisodesRoute.getInitialProps = async (ctx) => {
  return { query: ctx.query };
};

export default EpisodesRoute;
