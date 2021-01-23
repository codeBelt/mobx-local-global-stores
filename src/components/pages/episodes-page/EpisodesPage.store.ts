import { observable } from 'mobx';
import groupBy from 'lodash.groupby';
import orderBy from 'lodash.orderby';
import { IEpisode, IEpisodeTable } from '../../../domains/shows/shows.types';
import dayjs from 'dayjs';
import { ApiResponse } from '../../../utils/http/http.types';
import { getGlobalStore } from '../../shared/global-store-provider/GlobalStoreProvider';
import { EpisodesToggleOption } from './episodes-toggle/EpisodesToggle.constants';

export const EpisodesPageStore = (episodesResults: ApiResponse<IEpisode[]>) =>
  observable({
    globalStore: getGlobalStore(),
    sortType: EpisodesToggleOption.ASC,
    episodesResults: episodesResults,

    get sortedTableData(): IEpisodeTable[] {
      return orderBy(this.generateTableData, 'title', this.sortType);
    },

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
            image: model.image?.medium ?? '',
          })),
        };
      });
    },

    setSortType(sortType: EpisodesToggleOption): void {
      this.sortType = sortType;

      this.globalStore.toastStore.enqueueToast('Nice! You just sorted Server-Side Rendered Content.', 'info');
    },
  });

export type EpisodesPageStore = ReturnType<typeof EpisodesPageStore>;
