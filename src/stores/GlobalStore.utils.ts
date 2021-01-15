import { Context, createContext, useContext } from 'react';
import environment from 'environment';
import GlobalStore from './GlobalStore';

let _globalStore: GlobalStore;
let _globalStoreContext: Context<GlobalStore>;

/**
 * setupGlobalStore sets up the initial global store.
 *
 * @param initialState
 */
export const setupGlobalStore = (initialState: Partial<GlobalStore> = {}): void => {
  // Always create a new store for SSG and SSR
  if (!_globalStore || environment.isServer) {
    _globalStore = new GlobalStore(initialState);
    _globalStoreContext = createContext(_globalStore);
  }
};

/**
 * getGlobalStore should be used outside of React component lifecycle.
 */
export const getGlobalStore = (): GlobalStore => _globalStore;

/**
 * useGlobalStore should be used in React Components.
 */
export const useGlobalStore = (): GlobalStore => useContext(_globalStoreContext);
