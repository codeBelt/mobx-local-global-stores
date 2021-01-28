import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { EpisodesPage } from '../../components/pages/episodes-page/EpisodesPage';

interface IProps {
  episodeId: string;
}

const EpisodesRoute: NextPage<IProps> = (props) => {
  return <EpisodesPage episodeId={props.episodeId} />;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const episodeId = ctx.query.episode_id as string;

  return {
    props: {
      episodeId: episodeId,
    },
  };
};

export default EpisodesRoute;
