import { ToastGlobalStore } from './toast/ToastGlobalStore';
import { configure } from 'mobx';
import environment from 'environment';
import { enableStaticRendering } from 'mobx-react-lite';
import { AuthGlobalStore } from './auth/AuthGlobalStore';

enableStaticRendering(environment.isServer);
// https://mobx.js.org/configuration.html#configuration-
configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

export default class GlobalStore {
  readonly authStore: AuthGlobalStore;
  readonly toastStore: ToastGlobalStore;

  constructor() {
    this.authStore = new AuthGlobalStore(this);
    this.toastStore = new ToastGlobalStore(this);
  }

  async hydrate(initialState?: Partial<GlobalStore>) {
    // TODO: hydrate your global stores when needed
    // this.exampleStore.hydrate(initialState.exampleStore);
  }
}
