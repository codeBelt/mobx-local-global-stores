import { makeVar } from '@apollo/client';
import { ToastNotification } from './toasts.graphql';

export const toastItemsVar = makeVar<ToastNotification[]>([]);
