import { toastErrorMessage } from 'domains/toasts/toasts.utils';
import dayjs from 'dayjs';
import groupBy from 'lodash.groupby';
import { Episode } from './EpisodesPage.graphql';
import { SortDirection } from 'constants/common.types';
import orderBy from 'lodash.orderby';

export const generateTableData = (episodes: Episode[] = [], error?: string) => {
  if (error) {
    toastErrorMessage(error);
    return [];
  }

  const seasons: { [season: string]: Episode[] } = groupBy(episodes, 'season');

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
};

export const generateAndSortTableData = (episodes: Episode[], sortType: SortDirection, error?: string) =>
  orderBy(generateTableData(episodes, error), 'title', sortType);
