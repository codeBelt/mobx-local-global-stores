import React from 'react';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { NextPage } from 'next';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  return <IndexPage />;
};

export default IndexRoute;
