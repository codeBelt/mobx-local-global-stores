import '../css/main.scss';

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import { MainNav } from '../components/shared/main-nav/MainNav';
import { SnackbarProvider } from 'notistack';
import { ToastNotifier } from '../components/ui/toast-notifier/ToastNotifier';
import { setupGlobalStore } from '../stores/GlobalStore.utils';
import { SignInModal } from '../components/shared/sign-in-modal/SignInModal';

const NextApp: React.FC<AppProps> = observer((props) => {
  setupGlobalStore(props.pageProps);

  return (
    <React.Fragment>
      <Head>
        <title>My Next.js Starter</title>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Head>
      <MainNav />
      <props.Component {...props.pageProps} />
      <SnackbarProvider>
        <ToastNotifier />
      </SnackbarProvider>
      <SignInModal />
    </React.Fragment>
  );
});

export default NextApp;
