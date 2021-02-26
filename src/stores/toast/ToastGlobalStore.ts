import { IObservableArray, makeAutoObservable, runInAction } from 'mobx';
import GlobalStore from '../GlobalStore';
import { IToastNotification } from '../../components/ui/toast-notifier/ToastNotifier.types';
import { VariantType } from 'notistack';

export class ToastGlobalStore {
  readonly globalStore: GlobalStore;
  notifications = ([] as unknown) as IObservableArray<IToastNotification>;

  constructor(globalStore: GlobalStore) {
    this.globalStore = globalStore;

    makeAutoObservable(this);
  }

  enqueueToast(message: string, variantType: VariantType) {
    const keyId = new Date().toString();

    this.notifications.push({
      message,
      options: {
        key: keyId,
        variant: variantType as VariantType,
      },
    });
  }

  removeToast(notification: IToastNotification) {
    runInAction(() => {
      this.notifications.remove(notification);
    });
  }
}
