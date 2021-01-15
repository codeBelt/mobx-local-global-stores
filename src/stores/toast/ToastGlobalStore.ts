import { IObservableArray, observable, runInAction } from 'mobx';
import GlobalStore from '../GlobalStore';
import { IToastNotification } from '../../components/ui/toast-notifier/ToastNotifier.types';
import { VariantType } from 'notistack';

export const ToastGlobalStore = (globalStore: GlobalStore) =>
  observable({
    notifications: ([] as unknown) as IObservableArray<IToastNotification>,

    enqueueToast(message: string, variantType: VariantType) {
      const keyId = new Date().toString();

      runInAction(() => {
        this.notifications.push({
          message,
          options: {
            key: keyId,
            variant: variantType as VariantType,
          },
        });
      });
    },

    removeToast(notification: IToastNotification) {
      runInAction(() => {
        this.notifications.remove(notification);
      });
    },
  });

export type ToastGlobalStore = ReturnType<typeof ToastGlobalStore>;
