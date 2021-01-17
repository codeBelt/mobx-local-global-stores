import '../css/main.scss';

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MainNav } from '../components/shared/main-nav/MainNav';
import { SnackbarProvider } from 'notistack';
import { ToastNotifier } from '../components/ui/toast-notifier/ToastNotifier';
import { SignInModal } from '../components/shared/sign-in-modal/SignInModal';
import { GlobalStoreProvider } from '../components/shared/global-store-provider/GlobalStoreProvider';

const NextApp: React.FC<AppProps> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>My Next.js Starter</title>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Head>

      <GlobalStoreProvider hydrationData={props.pageProps}>
        <SnackbarProvider>
          <MainNav />
          <props.Component {...props.pageProps} />
          <ToastNotifier />
          <SignInModal />
        </SnackbarProvider>
      </GlobalStoreProvider>
    </React.Fragment>
  );
};

export default NextApp;
