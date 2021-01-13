import { IApiError, SuccessfulResponse } from './http/http.types';

export type ResponseStatus<T, E = IApiError> = Omit<SuccessfulResponse<T>, 'error'> & {
  isRequesting: boolean;
  error?: E;
};

/**
 * Util to standardize api responses for mobx stores.
 */
export const initialResponseStatus = <T, E = IApiError>(
  defaultValue: T,
  defaultIsRequesting = false
): ResponseStatus<T, E> => {
  return {
    isRequesting: defaultIsRequesting,
    data: defaultValue,
  };
};
