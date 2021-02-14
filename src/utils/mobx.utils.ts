import { IApiError, SuccessfulResponse } from './http/http.types';
import { PersistenceStore } from 'mobx-persist-store/lib/types';
import { persistence, StorageAdapter } from 'mobx-persist-store';
import environment from 'environment';

// export function readStore(name) {
//   return new Promise((resolve) => {
//     const data = localStorage?.getItem(name);
//
//     resolve(JSON.parse(data));
//   });
// }
//
// export function writeStore(name, content) {
//   return new Promise((resolve) => {
//     localStorage?.setItem(name, JSON.stringify(content));
//     resolve();
//   });
// }

export type ResponseStatus<T, E = IApiError> = Omit<SuccessfulResponse<T>, 'error'> & {
  isRequesting: boolean;
  error?: E;
};

/**
 * Util to standardize api responses for mobx stores.
 */
export const initialResponseStatus = <T, E = IApiError>(
  defaultValue: T,
  defaultIsRequesting = true
): ResponseStatus<T, E> => {
  return {
    isRequesting: defaultIsRequesting,
    data: defaultValue,
  };
};

export const persistStore = <T extends { [key: string]: any }, K extends keyof T>(
  target: T,
  properties: K[]
): T | PersistenceStore<T> => {
  console.log(`target`, target);
  console.log(`properties`, properties);
  if (environment.isServer) {
    return target;
  }

  return persistence({
    name: 'IndexPageStore',
    properties: properties as string[],
    adapter: new StorageAdapter({
      read: (name: string) => {
        return new Promise((resolve) => {
          const data = window.localStorage.getItem(name);

          resolve(JSON.parse(data));
        });
      },
      write: (name, content) => {
        return new Promise((resolve) => {
          window.localStorage.setItem(name, JSON.stringify(content));
          resolve();
        });
      },
    }),
    reactionOptions: {
      // optional
      delay: 2000,
    },
  })(target);
};
