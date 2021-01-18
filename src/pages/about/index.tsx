import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { AboutPage } from '../../components/pages/about-page/AboutPage';
import { LocalStoreProvider } from '../../components/shared/local-store-provider/LocalStoreProvider';
import { AboutPageStore } from '../../components/pages/about-page/AboutPage.store';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  const [localStore] = useState(AboutPageStore());

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  return (
    <LocalStoreProvider localStore={localStore}>
      <AboutPage />
    </LocalStoreProvider>
  );
};

export default AboutRoute;
