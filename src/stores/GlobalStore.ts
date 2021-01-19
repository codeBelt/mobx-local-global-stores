import { ToastGlobalStore } from './toast/ToastGlobalStore';
import { configure } from 'mobx';
import environment from 'environment';
import { enableStaticRendering } from 'mobx-react-lite';
import { AuthGlobalStore } from './auth/AuthGlobalStore';

enableStaticRendering(environment.isServer);
// https://mobx.js.org/configuration.html#configuration-
configure({
  enforceActions: 'always',
  computedRequiresReaction: environment.isBrowser,
  reactionRequiresObservable: environment.isBrowser,
  observableRequiresReaction: environment.isBrowser,
  disableErrorBoundaries: environment.isBrowser,
});

export default class GlobalStore {
  readonly authStore: AuthGlobalStore;
  readonly toastStore: ToastGlobalStore;

  constructor() {
    this.authStore = AuthGlobalStore(this);
    this.toastStore = ToastGlobalStore(this);
  }

  async hydrate(initialState?: Partial<GlobalStore>) {
    // TODO: hydrate your global stores
  }
}
