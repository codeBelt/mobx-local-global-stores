import environment from 'environment';
import { http } from '../../utils/http/http';
import { ICast, IEpisode, IShow } from './shows.types';
import { AxiosRequestCacheRequest } from '../../utils/http/http.types';

export const getShowRequest = async (showId: string, cacheRequest: AxiosRequestCacheRequest) => {
  const endpoint: string = environment.api.shows.replace(':showId', showId);

  return http.get<IShow>(endpoint, {}, cacheRequest);
};

export const getEpisodesRequest = async (showId: string) => {
  const endpoint: string = environment.api.episodes.replace(':showId', showId);

  return http.get<IEpisode[]>(endpoint);
};

export const getCastsRequest = async (showId: string) => {
  const endpoint: string = environment.api.cast.replace(':showId', showId);

  return http.get<ICast[]>(endpoint);
};

/**
 * This is only to trigger an error api response so we can use it for an example in the AboutPage
 */
export const getErrorRequest = async () => {
  const endpoint: string = environment.api.errorExample;

  return http.get<null>(endpoint);
};
