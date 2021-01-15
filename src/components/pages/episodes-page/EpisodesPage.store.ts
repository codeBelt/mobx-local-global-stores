import { observable } from 'mobx';
import { getEpisodesRequest } from '../../../domains/shows/shows.services';
import { initialResponseStatus } from '../../../utils/mobx.utils';
import groupBy from 'lodash.groupby';
import { IEpisode, IEpisodeTable } from '../../../domains/shows/shows.types';
import dayjs from 'dayjs';
import { ApiResponse } from '../../../utils/http/http.types';
import { getGlobalStore } from '../../../stores/GlobalStore.utils';

export const EpisodesPageStore = () =>
  observable({
    globalStore: getGlobalStore(),
    episodesResults: initialResponseStatus<IEpisode[]>([]),

    get generateTableData(): IEpisodeTable[] {
      if (this.episodesResults.error) {
        return [];
      }

      const seasons: { [season: string]: IEpisode[] } = groupBy(this.episodesResults.data, 'season');

      return Object.entries(seasons).map(([season, models]) => {
        return {
          title: `Season ${season}`,
          rows: models.map((model) => ({
            episode: model.number,
            name: model.name,
            date: dayjs(model.airdate).format('MMM D, YYYY'),
            image: model.image.medium,
          })),
        };
      });
    },

    /**
     * Store initializer. Should only be called once.
     */
    *init() {
      yield Promise.all([this.loadEpisodes()]);
    },

    *loadEpisodes() {
      const { episode_id } = this.globalStore.router.query;
      const response: ApiResponse<IEpisode[]> = yield getEpisodesRequest(episode_id as string);

      this.episodesResults = {
        ...this.episodesResults,
        ...response,
        isRequesting: false,
      };
    },
  });

export type EpisodesPageStore = ReturnType<typeof EpisodesPageStore>;
