import Router, { NextRouter } from 'next/router';
import { ToastGlobalStore } from './toast/ToastGlobalStore';
import { configure } from 'mobx';
import environment from 'environment';
import { enableStaticRendering } from 'mobx-react-lite';
import { AuthGlobalStore } from './auth/AuthGlobalStore';

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(environment.isServer); // Not a react-hook
configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
}); // https://mobx.js.org/configuration.html#configuration-

export default class GlobalStore {
  readonly router: NextRouter;
  readonly authStore: AuthGlobalStore;
  readonly toastStore: ToastGlobalStore;

  constructor(initialState: Partial<GlobalStore>) {
    this.router = Router.router as NextRouter;
    this.authStore = AuthGlobalStore(this);
    this.toastStore = ToastGlobalStore(this);
  }
}
