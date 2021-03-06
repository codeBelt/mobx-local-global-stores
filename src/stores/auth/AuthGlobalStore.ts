import { makeAutoObservable } from 'mobx';
import GlobalStore from '../GlobalStore';
import { getUserRequest } from '../../domains/auth/auth.services';
import { ApiResponse } from '../../utils/http/http.types';
import { initialResponseStatus } from '../../utils/mobx.utils';
import { Routes } from '../../constants/Routes.constants';
import { IUser, IUserResponse } from '../../domains/auth/auth.types';
import Router from 'next/router';

export class AuthGlobalStore {
  readonly globalStore: GlobalStore;
  authResults = initialResponseStatus<IUserResponse | null>(null, false);

  constructor(globalStore: GlobalStore) {
    this.globalStore = globalStore;

    makeAutoObservable(this);
  }

  get isAuthenticated(): boolean {
    return Boolean(this.authResults.data);
  }

  get user(): IUser | null {
    if (this.authResults.data) {
      return this.authResults.data.results[0];
    }

    return null;
  }

  get userFullName(): string {
    return `${this.user?.name?.first} ${this.user?.name?.last}`.trim();
  }

  *signIn() {
    this.authResults.isRequesting = true;

    const response: ApiResponse<IUserResponse> = yield getUserRequest();

    this.authResults = {
      data: this.authResults.data,
      isRequesting: false,
      ...response, // Overwrites the default data prop or adds an error. Also adds the statusCode.
    };

    if (this.user) {
      this.globalStore.toastStore.enqueueToast(`Welcome ${this.userFullName}`, 'success');
    } else {
      this.globalStore.toastStore.enqueueToast('Sign In Issue. Try Again.', 'error');
    }
  }

  signOut(): void {
    this.authResults = initialResponseStatus(null, false);

    Router.router?.push(Routes.Index);
  }
}
