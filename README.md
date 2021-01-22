## Global & Local State with MobX Example

### A factory function approach to MobX stores with React & Next.js

[View the demo site](https://mobx-local-global-stores.vercel.app/)

[Checkout the repo](https://github.com/codeBelt/mobx-local-global-stores)

![screenshot of website](./animation.gif)

### Quick Overview

#### [GlobalStores](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/stores/GlobalStore.ts)

- **[AuthGlobalStore](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/stores/auth/AuthGlobalStore.ts)**: A fake auth store to keep track of a user loaded from [randomuser.me](https://randomuser.me/)
- **[ToastGlobalStore](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/stores/toast/ToastGlobalStore.ts)**: A store that uses [notistack](https://iamhosseindhv.com/notistack) to create a notification (toast) system

#### Local Stores

- **[IndexPageStore](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/components/pages/index-page/IndexPage.store.ts)**:
  - Makes two requests in the browser to [api.tvmaze.com](https://api.tvmaze.com).
  - Show a loading indicator and allows the user to sort actors.
- **[EpisodesPageStore](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/components/pages/episodes-page/EpisodesPage.store.ts)**:
  - Hydrated with data that was fetched server-side.
  - Allows the user to sort the data on the page that was previously server-side rendered.
  - Shows how use the [GlobalStores](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/stores/GlobalStore.ts) ([getGlobalStore()](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/components/shared/global-store-provider/GlobalStoreProvider.tsx#L13)) within local stores.
- **[AboutPageStore](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/components/pages/about-page/AboutPage.store.ts)**:
  - A simple store that makes a request to [httpstat.us](https://httpstat.us).
  - Show how to handle api errors in the local store and on the page.
  - Shows how use the [GlobalStores](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/stores/GlobalStore.ts) ([getGlobalStore()](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/components/shared/global-store-provider/GlobalStoreProvider.tsx#L13)) within local stores.

If you want to see an overview of the files using Mobx check out this [PR Diff](https://github.com/codeBelt/mobx-local-global-stores/pull/4/files).

### Feedback Welcomed

If you want to give me feedback on how to improve my usage with MobX, TypeScript types, or Next.js. Create an issue on my [repo](https://github.com/codeBelt/mobx-local-global-stores).

If you a lot of feedback I can add you to the repo and give you a [PR](https://github.com/codeBelt/mobx-local-global-stores/pull/4/files) to add comments on. Leave me a message in [issues](https://github.com/codeBelt/mobx-local-global-stores/issues).

### Help Wanted

- How to resole some of the `[mobx]` warnings I am getting in the browser console. (You need to run the code locally `npm run dev`)
- Validate I am following best practice with Mobx with factory functions.
- Help me understand how to remove `runInAction` from [ToastGlobalStore](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/stores/toast/ToastGlobalStore.ts) and validate I set up [ToastNotifier](https://github.com/codeBelt/mobx-local-global-stores/blob/main/src/components/ui/toast-notifier/ToastNotifier.tsx) correctly.
