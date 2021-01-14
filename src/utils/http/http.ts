import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse, IApiError } from './http.types';
import { HttpVerbs } from './http.constants';

const httpRequest = async <T>(
  method: HttpVerbs,
  url: string,
  paramsOrData?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T, IApiError>> => {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    url,
    method,
    params: method === HttpVerbs.Get ? paramsOrData : undefined,
    data: method !== HttpVerbs.Get ? paramsOrData : undefined,
    headers: {
      accept: 'application/json',
      ...config?.headers,
    },
  };

  try {
    const response: AxiosResponse<T> = await axios(requestConfig);

    return { data: response.data, statusCode: response.status };
  } catch (error) {
    return {
      error: {
        message: error?.response?.data?.description,
      },
      statusCode: error?.response?.status,
    };
  }
};

export const http = {
  get: async <T>(url: string, params?: any, config?: AxiosRequestConfig) =>
    httpRequest<T>(HttpVerbs.Get, url, params, config),
  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    httpRequest<T>(HttpVerbs.Put, url, data, config),
  patch: async <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    httpRequest<T>(HttpVerbs.Patch, url, data, config),
  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    httpRequest<T>(HttpVerbs.Post, url, data, config),
  delete: async <T>(url: string, config?: AxiosRequestConfig) => httpRequest<T>(HttpVerbs.Delete, url, null, config),
};
