import React, { useCallback, useState } from 'react';
import { OptionsObject, SnackbarAction, useSnackbar } from 'notistack';
import { Button } from 'semantic-ui-react';
import { useGetToastItemsQuery } from '../../../lib/toasts/toasts.graphql';
import { removeToasts } from './ToastNotifier.utils';

interface IProps {}

export const ToastNotifier: React.FC<IProps> = (props) => {
  const { data } = useGetToastItemsQuery({ fetchPolicy: 'cache-only' });
  const toastItems = data?.toastItems ?? [];
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [displayed, setDisplayed] = useState<(string | number)[]>([]);

  const action: SnackbarAction = useCallback(
    (key) => <Button circular={true} size="mini" icon="close" onClick={() => closeSnackbar(key)} />,
    [closeSnackbar]
  );

  toastItems.forEach((notification) => {
    const shapedOptions: OptionsObject = {
      action,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      autoHideDuration: 3000,
      disableWindowBlurListener: true,
      variant: notification?.variant ?? 'default',
    };
    const key = notification?.key as string;

    // https://github.com/iamhosseindhv/notistack/tree/master/examples/mobx-example
    // Do nothing if snackbar is already displayed
    if (displayed.includes(key)) {
      return;
    }
    // Display snackbar using notistack
    enqueueSnackbar(notification?.message, shapedOptions);
    // Keep track of snackbars that we've displayed
    setDisplayed([...displayed, key]);
    // // Remove snackbar from Apollo cache
    removeToasts();
  });

  return null;
};

ToastNotifier.displayName = 'ToastNotifier';
ToastNotifier.defaultProps = {};
