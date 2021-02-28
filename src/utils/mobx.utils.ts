import { IApiError, SuccessfulResponse } from './http/http.types';
import { PersistenceStore } from 'mobx-persist-store/lib/types';
import { persistence, StorageAdapter } from 'mobx-persist-store';
import environment from 'environment';

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
  properties: K[],
  name: string
): T | PersistenceStore<T> => {
  if (environment.isServer) {
    return target;
  }

  return persistence({
    name: name,
    properties: properties as string[],
    adapter: new StorageAdapter({
      read: async (name: string) => {
        const data = window.localStorage.getItem(name);

        return data ? JSON.parse(data) : undefined;
      },
      write: async (name, content) => {
        window.localStorage.setItem(name, JSON.stringify(content));

        return undefined;
      },
    }),
    reactionOptions: {
      delay: 200,
    },
  })(target);
};
