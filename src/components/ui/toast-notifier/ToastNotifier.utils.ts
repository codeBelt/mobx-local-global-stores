import { getGlobalStore } from '../../../stores/GlobalStore.utils';

export const toastSuccessMessage = (message: string): void => {
  getGlobalStore().toastStore.enqueueToast(message, 'success');
};

export const toastWarningMessage = (message: string): void => {
  getGlobalStore().toastStore.enqueueToast(message, 'warning');
};

export const toastErrorMessage = (message: string): void => {
  getGlobalStore().toastStore.enqueueToast(message, 'error');
};
