import { ApiResponse } from '../../utils/http/http.types';
import environment from 'environment';
import { http } from '../../utils/http/http';
import { IUserResponse } from './auth.types';

export const getUserRequest = async (): Promise<ApiResponse<IUserResponse>> => {
  const endpoint: string = environment.api.user;

  return http.get<IUserResponse>(endpoint);
};
