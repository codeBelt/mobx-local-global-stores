import React, { useEffect, useState } from 'react';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { NextPage } from 'next';
import { LocalStoreProvider } from '../components/shared/local-store-provider/LocalStoreProvider';
import { IndexPageStore } from '../components/pages/index-page/IndexPage.store';
import { observer } from 'mobx-react-lite';
import { persistStore } from '../utils/mobx.utils';

interface IProps {}

const IndexRoute: NextPage<IProps> = observer((props) => {
  const [localStore] = useState(() => persistStore(new IndexPageStore(), ['castsResults', 'showResults', 'sortValue']));

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  return (
    <LocalStoreProvider localStore={localStore}>
      <IndexPage />
    </LocalStoreProvider>
  );
});

export default IndexRoute;
