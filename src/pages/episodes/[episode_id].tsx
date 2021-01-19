import React, { useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import { EpisodesPage } from '../../components/pages/episodes-page/EpisodesPage';
import { LocalStoreProvider } from '../../components/shared/local-store-provider/LocalStoreProvider';
import { EpisodesPageStore } from '../../components/pages/episodes-page/EpisodesPage.store';
import { ApiResponse } from '../../utils/http/http.types';
import { IEpisode } from '../../domains/shows/shows.types';
import { getEpisodesRequest } from '../../domains/shows/shows.services';

interface IProps {
  episodesResults: ApiResponse<IEpisode[]>;
}

const EpisodesRoute: NextPage<IProps> = (props) => {
  const [localStore] = useState(EpisodesPageStore(props.episodesResults));

  return (
    <LocalStoreProvider localStore={localStore}>
      <EpisodesPage />
    </LocalStoreProvider>
  );
};

EpisodesRoute.getInitialProps = async (ctx: NextPageContext) => {
  const episodeId = ctx.query.episode_id as string;
  const response = await getEpisodesRequest(episodeId);

  return { episodesResults: response };
};

export default EpisodesRoute;
