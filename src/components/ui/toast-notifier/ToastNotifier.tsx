import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useGlobalStore } from '../../shared/global-store-provider/GlobalStoreProvider';
import { autorun } from 'mobx';
import { OptionsObject, SnackbarAction, useSnackbar } from 'notistack';
import { IToastNotification } from './ToastNotifier.types';
import { Button } from 'semantic-ui-react';

interface IProps {}

export const ToastNotifier: React.FC<IProps> = observer((props) => {
  const { toastStore } = useGlobalStore();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [displayed, setDisplayed] = useState<(string | number)[]>([]);

  const action: SnackbarAction = useCallback(
    (key) => <Button circular={true} size="mini" icon="close" onClick={() => closeSnackbar(key)} />,
    [closeSnackbar]
  );

  autorun(() => {
    toastStore.notifications.forEach((notification: IToastNotification) => {
      const shapedOptions: OptionsObject = {
        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
        disableWindowBlurListener: true,
        action,
        variant: notification.options.variant,
      };
      const key = notification.options.key as string;

      // https://github.com/iamhosseindhv/notistack/tree/master/examples/mobx-example
      // Do nothing if snackbar is already displayed
      if (displayed.includes(key)) {
        return;
      }
      // Display snackbar using notistack
      enqueueSnackbar(notification.message, shapedOptions);
      // Keep track of snackbars that we've displayed
      setDisplayed([...displayed, key]);
      // Dispatch action to remove snackbar from mobx store
      toastStore.removeToast(notification);
    });
  });

  return null;
});
