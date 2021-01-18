import React, { useEffect, useState } from 'react';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { NextPage } from 'next';
import { LocalStoreProvider } from '../components/shared/local-store-provider/LocalStoreProvider';
import { IndexPageStore } from '../components/pages/index-page/IndexPage.store';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  const [localStore] = useState(IndexPageStore());

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  return (
    <LocalStoreProvider localStore={localStore}>
      <IndexPage />
    </LocalStoreProvider>
  );
};

export default IndexRoute;
