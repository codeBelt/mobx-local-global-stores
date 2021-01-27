import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { EpisodesPage } from '../../components/pages/episodes-page/EpisodesPage';
import { ApiResponse } from '../../utils/http/http.types';
import { IEpisode } from '../../domains/shows/shows.types';
import { getEpisodesRequest } from '../../domains/shows/shows.services';

interface IProps {
  episodesResults: ApiResponse<IEpisode[]>;
  episodeId: string;
}

const EpisodesRoute: NextPage<IProps> = (props) => {
  return <EpisodesPage episodeId={props.episodeId} />;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const episodeId = ctx.query.episode_id as string;
  const response = await getEpisodesRequest(episodeId);

  if (response.data) {
    return {
      props: {
        episodesResults: response,
        episodeId: episodeId,
      },
    };
  }

  // return a 404 status and 404 page
  return { notFound: true };
};

export default EpisodesRoute;
