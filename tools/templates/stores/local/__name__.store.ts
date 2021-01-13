import { observable } from 'mobx';

export const __name__Store = () =>
  observable({
    // globalStore: getGlobalStore(),
    isStoreReady: false,
    somethingResults: initialResponseStatus<unknown>(null),

    // get computeSomething(): unknown {
    //   return this.somethingResults.data;
    // },

    /**
     * Store initializer. Should only be called once.
     */
    *init() {
      yield Promise.all([this.loadSomething()]);

      this.isStoreReady = true;
    },

    async loadSomething() {
    },
  });

export type __name__Store = ReturnType<typeof __name__Store>;
