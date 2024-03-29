import '../styles/main.scss';
import 'nprogress/nprogress.css';

import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MainNav } from '../components/shared/main-nav/MainNav';
import { SnackbarProvider } from 'notistack';
import { ToastNotifier } from '../components/ui/toast-notifier/ToastNotifier';
import { SignInModalDynamic } from '../components/shared/sign-in-modal/SignInModal.dynamic';
import { GlobalStoreProvider } from '../components/shared/global-store-provider/GlobalStoreProvider';

NProgress.configure({ showSpinner: false, minimum: 0.1 });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const NextApp: React.FC<AppProps> = (props) => {
  return (
    <>
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
          <SignInModalDynamic />
        </SnackbarProvider>
      </GlobalStoreProvider>
    </>
  );
};

export default NextApp;
