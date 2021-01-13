import { observable, runInAction } from 'mobx';
import GlobalStore from '../GlobalStore';

export interface __name__GlobalStoreState {
  ids: string[];
}

export const __name__GlobalStore = (globalStore: GlobalStore, initialState: Partial<__name__GlobalStoreState> = {}) =>
  observable({
    ids: [] as string[],

    ...initialState,

    get stringifiedList(): string {
      return this.ids.join(',');
    },

    add(id: string) {
      runInAction(() => this.ids.push(id));
    },

    remove(id: string) {
      const idList = this.ids.filter((savedId: string) => savedId !== id);

      runInAction(() => (this.ids = idList));
    },
  });

export type __name__GlobalStore = ReturnType<typeof __name__GlobalStore>;
