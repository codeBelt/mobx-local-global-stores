import { observable } from 'mobx';
import { getErrorRequest } from '../../../domains/shows/shows.services';
import { initialResponseStatus } from '../../../utils/mobx.utils';
import { ApiResponse } from '../../../utils/http/http.types';
import { getGlobalStore } from '../../../stores/GlobalStore.utils';

export const AboutPageStore = () =>
  observable({
    globalStore: getGlobalStore(),
    errorExampleResults: initialResponseStatus<null>(null),

    /**
     * Store initializer. Should only be called once.
     */
    *init() {
      yield Promise.all([this.loadSomething()]);
    },

    *loadSomething() {
      const response: ApiResponse<null> = yield getErrorRequest();

      this.errorExampleResults = {
        ...this.errorExampleResults,
        ...response,
        isRequesting: false,
      };

      if (response.error) {
        const message = `${response.statusCode}: ${response.error.message}`;

        this.globalStore.toastStore.enqueueToast(message, 'error');
      }
    },
  });

export type AboutPageStore = ReturnType<typeof AboutPageStore>;
