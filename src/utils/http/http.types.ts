export type SuccessfulResponse<T> = { data: T; error?: never; statusCode?: number };
export type UnsuccessfulResponse<E> = { data?: never; error: E; statusCode?: number };

export interface IApiError {
  message: string;
}

export type ApiResponse<T, E = IApiError> = SuccessfulResponse<T> | UnsuccessfulResponse<E>;
