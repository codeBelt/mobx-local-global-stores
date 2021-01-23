import { makeAutoObservable } from 'mobx';
import { getErrorRequest } from '../../../domains/shows/shows.services';
import { initialResponseStatus } from '../../../utils/mobx.utils';
import { ApiResponse } from '../../../utils/http/http.types';
import { getGlobalStore } from '../../shared/global-store-provider/GlobalStoreProvider';

export class AboutPageStore {
  globalStore = getGlobalStore();
  errorExampleResults = initialResponseStatus<null>(null);

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Store initializer. Should only be called once.
   */
  *init() {
    yield Promise.all([this.loadSomething()]);
  }

  *loadSomething() {
    const response: ApiResponse<null> = yield getErrorRequest();

    this.errorExampleResults = {
      data: this.errorExampleResults.data,
      isRequesting: false,
      ...response, // Overwrites the default data prop or adds an error. Also adds the statusCode.
    };

    if (response.error) {
      const message = `${response.statusCode}: ${response.error.message}`;

      this.globalStore.toastStore.enqueueToast(message, 'error');
    }
  }
}
