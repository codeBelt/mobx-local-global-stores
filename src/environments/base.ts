/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */

export default function baseEnv() {
  return {
    api: {
      cast: 'https://api.tvmaze.com/shows/:showId/cast',
      episodes: 'https://api.tvmaze.com/shows/:showId/episodes',
      shows: 'https://api.tvmaze.com/shows/:showId',
      user: 'https://randomuser.me/api/?inc=gender,name',
      errorExample: 'https://httpstat.us/418',
    },

    isServer: typeof window === 'undefined',
    isBrowser: typeof window !== 'undefined',
    isDevelopment: process.env.NODE_ENV !== 'production',
    isProduction: process.env.NODE_ENV === 'production',
  };
}

export type Environment = ReturnType<typeof baseEnv>;
