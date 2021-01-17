import { getGlobalStore } from '../../shared/global-store-provider/GlobalStoreProvider';

export const toastSuccessMessage = (message: string): void => {
  getGlobalStore().toastStore.enqueueToast(message, 'success');
};

export const toastWarningMessage = (message: string): void => {
  getGlobalStore().toastStore.enqueueToast(message, 'warning');
};

export const toastErrorMessage = (message: string): void => {
  getGlobalStore().toastStore.enqueueToast(message, 'error');
};
