import { delay } from '../../utils/misc.utils';
import { ApiResponse } from '../../utils/http/http.types';

export const getUserRequest = async (): Promise<ApiResponse<string>> => {
  await delay(1000);

  return { data: 'Jamie Doe', statusCode: 200 };
};
