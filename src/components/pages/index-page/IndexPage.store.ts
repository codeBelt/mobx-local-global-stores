import { makeAutoObservable } from 'mobx';
import { getCastsRequest, getShowRequest } from '../../../domains/shows/shows.services';
import { initialResponseStatus, persistStore } from '../../../utils/mobx.utils';
import { ICast, IShow } from '../../../domains/shows/shows.types';
import { ApiResponse } from '../../../utils/http/http.types';
import { defaultShowId } from '../../../domains/shows/shows.constants';
import orderBy from 'lodash.orderby';

export class IndexPageStore {
  // globalStore: getGlobalStore(),
  sortValue = '';
  showResults = initialResponseStatus<IShow | null>(null);
  castsResults = initialResponseStatus<ICast[]>([]);

  constructor() {
    console.log(`hey`);
    makeAutoObservable(this);
  }

  get isRequesting(): boolean {
    return [this.showResults.isRequesting, this.castsResults.isRequesting].some(Boolean);
  }

  get actors(): ICast[] {
    return orderBy(this.castsResults.data, (cast) => cast.person[this.sortValue], 'asc');
  }

  setSortOption(sortValue: string): void {
    this.sortValue = sortValue;
  }

  /**
   * Store initializer. Should only be called once.
   */
  *init() {
    yield Promise.all([this.loadShow(), this.loadCasts()]);
  }

  *loadShow() {
    const response: ApiResponse<IShow> = yield getShowRequest(defaultShowId);

    this.showResults = {
      data: this.showResults.data,
      isRequesting: false,
      ...response, // Overwrites the default data prop or adds an error. Also adds the statusCode.
    };
  }

  *loadCasts() {
    const response: ApiResponse<ICast[]> = yield getCastsRequest(defaultShowId);

    this.castsResults = {
      data: this.castsResults.data,
      isRequesting: false,
      ...response, // Overwrites the default data prop or adds an error. Also adds the statusCode.
    };
  }
}

export const persistIndexPageStore = () => {
  return persistStore(new IndexPageStore(), ['castsResults', 'showResults', 'sortValue'], 'IndexPageStore');
};
