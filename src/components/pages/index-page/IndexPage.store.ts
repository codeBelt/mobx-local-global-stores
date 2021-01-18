import { observable } from 'mobx';
import { getCastsRequest, getShowRequest } from '../../../domains/shows/shows.services';
import { initialResponseStatus } from '../../../utils/mobx.utils';
import { ICast, IShow } from '../../../domains/shows/shows.types';
import { ApiResponse } from '../../../utils/http/http.types';
import { defaultShowId } from '../../../domains/shows/shows.constants';
import orderBy from 'lodash.orderby';

export const IndexPageStore = () =>
  observable({
    // globalStore: getGlobalStore(),
    sortValue: '',
    showResults: initialResponseStatus<IShow | null>(null),
    castsResults: initialResponseStatus<ICast[]>([]),

    get isRequesting(): boolean {
      return [this.showResults.isRequesting, this.castsResults.isRequesting].some(Boolean);
    },

    get actors(): ICast[] {
      return orderBy(this.castsResults.data, (cast) => cast.person[this.sortValue], 'asc');
    },

    setSortOption(sortValue: string) {
      this.sortValue = sortValue;
    },

    /**
     * Store initializer. Should only be called once.
     */
    *init() {
      yield Promise.all([this.loadShow(), this.loadCasts()]);
    },

    *loadShow() {
      const response: ApiResponse<IShow> = yield getShowRequest(defaultShowId);

      this.showResults = {
        ...this.showResults,
        ...response,
        isRequesting: false,
      };
    },

    *loadCasts() {
      const response: ApiResponse<ICast[]> = yield getCastsRequest(defaultShowId);

      this.castsResults = {
        ...this.castsResults,
        ...response,
        isRequesting: false,
      };
    },
  });

export type IndexPageStore = ReturnType<typeof IndexPageStore>;
