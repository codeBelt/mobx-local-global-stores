import { observable } from 'mobx';
import GlobalStore from '../GlobalStore';
import { getUserRequest } from '../../domains/auth/auth.services';
import { ApiResponse } from '../../utils/http/http.types';
import { initialResponseStatus } from '../../utils/mobx.utils';
import { Routes } from '../../constants/Routes';

export const AuthGlobalStore = (globalStore: GlobalStore) =>
  observable({
    authResults: initialResponseStatus<string>('', false),

    get isAuthenticated() {
      return Boolean(this.authResults.data);
    },

    *signIn() {
      this.authResults.isRequesting = true;

      const response: ApiResponse<string> = yield getUserRequest();

      this.authResults = {
        ...this.authResults,
        ...response,
        isRequesting: false,
      };

      if (response.data) {
        globalStore.toastStore.enqueueToast(`Welcome ${response.data}`, 'success');
      }
    },

    signOut() {
      this.authResults.data = '';

      globalStore.router.push(Routes.Index);
    },
  });

export type AuthGlobalStore = ReturnType<typeof AuthGlobalStore>;
