import React, { Context, createContext, useContext } from 'react';
import GlobalStore from '../../../stores/GlobalStore';
import environment from 'environment';

/**
 * A reference to a "single" instance of the global store.
 */
let _globalStore: GlobalStore;

/**
 * getGlobalStore should be used outside of React component lifecycle.
 */
export const getGlobalStore = (): GlobalStore => _globalStore;

/**
 * setupGlobalStore sets up the initial global store.
 */
export const setupGlobalStore = (initialState: Partial<GlobalStore> = {}): GlobalStore => {
  // Always create a new store for SSG and SSR
  if (!_globalStore || environment.isServer) {
    _globalStore = new GlobalStore();
  }

  if (initialState) {
    _globalStore.hydrate(initialState);
  }

  return _globalStore;
};

export const GlobalStoreContext: Context<GlobalStore> = createContext(setupGlobalStore());

/**
 * useGlobalStore should be used in React Components.
 */
export const useGlobalStore = (): GlobalStore => useContext(GlobalStoreContext);

/**
 * Global Store Provider Component
 */
export interface IProps {
  hydrationData?: Partial<GlobalStore>;
}

export const GlobalStoreProvider: React.FC<IProps> = (props) => {
  _globalStore = setupGlobalStore(props.hydrationData);

  return <GlobalStoreContext.Provider value={_globalStore}>{props.children}</GlobalStoreContext.Provider>;
};

GlobalStoreProvider.defaultProps = {};
