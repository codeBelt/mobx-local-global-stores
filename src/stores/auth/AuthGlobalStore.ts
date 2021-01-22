import { observable } from 'mobx';
import GlobalStore from '../GlobalStore';
import { getUserRequest } from '../../domains/auth/auth.services';
import { ApiResponse } from '../../utils/http/http.types';
import { initialResponseStatus } from '../../utils/mobx.utils';
import { Routes } from '../../constants/Routes';
import { IUser, IUserResponse } from '../../domains/auth/auth.types';
import Router from 'next/router';

export const AuthGlobalStore = (globalStore: GlobalStore) =>
  observable({
    authResults: initialResponseStatus<IUserResponse | null>(null, false),

    get isAuthenticated() {
      return Boolean(this.authResults.data);
    },

    get user(): IUser | null {
      if (this.authResults.data) {
        return this.authResults.data.results[0];
      }

      return null;
    },

    get userFullName(): string {
      return `${this.user?.name?.first} ${this.user?.name?.last}`.trim();
    },

    *signIn() {
      this.authResults.isRequesting = true;

      const response: ApiResponse<IUserResponse> = yield getUserRequest();

      this.authResults = {
        ...this.authResults,
        ...response,
        isRequesting: false,
      };

      if (this.user) {
        globalStore.toastStore.enqueueToast(`Welcome ${this.userFullName}`, 'success');
      }
    },

    signOut() {
      this.authResults.data = null;

      Router.router?.push(Routes.Index);
    },
  });

export type AuthGlobalStore = ReturnType<typeof AuthGlobalStore>;
