import React from 'react';
import { NextPage } from 'next';
import { EpisodesPage } from '../../components/pages/episodes-page/EpisodesPage';

interface IProps {}

const EpisodesRoute: NextPage<IProps> = (props) => {
  return <EpisodesPage />;
};

EpisodesRoute.getInitialProps = async (ctx) => {
  return { query: ctx.query };
};

export default EpisodesRoute;
