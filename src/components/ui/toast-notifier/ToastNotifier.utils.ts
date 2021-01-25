import { toastItemsVar } from 'lib/toasts/toasts.utils';
import { ToastVariant } from 'lib/toasts/toasts.graphql';

export const toastSuccessMessage = (message: string): void => {
  toastItemsVar([...toastItemsVar(), { message, variant: ToastVariant.Success, key: new Date().toString() }]);
};

export const toastWarningMessage = (message: string): void => {
  toastItemsVar([...toastItemsVar(), { message, variant: ToastVariant.Warning, key: new Date().toString() }]);
};

export const toastErrorMessage = (message: string): void => {
  toastItemsVar([...toastItemsVar(), { message, variant: ToastVariant.Error, key: new Date().toString() }]);
};

export const removeToasts = () => {
  toastItemsVar([]);
};
