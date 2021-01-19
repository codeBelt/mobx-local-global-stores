import { observable } from 'mobx';
import groupBy from 'lodash.groupby';
import { IEpisode, IEpisodeTable } from '../../../domains/shows/shows.types';
import dayjs from 'dayjs';
import { ApiResponse } from '../../../utils/http/http.types';
import { getGlobalStore } from '../../shared/global-store-provider/GlobalStoreProvider';

export const EpisodesPageStore = (episodesResults: ApiResponse<IEpisode[]>) =>
  observable({
    globalStore: getGlobalStore(),
    episodesResults: episodesResults,

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
  });

export type EpisodesPageStore = ReturnType<typeof EpisodesPageStore>;
