import React from 'react';
import { use__name__Styles } from './__name__.styles';

export interface IProps {}

export const __name__: React.FC<IProps> = (props) => {
  const classes = use__name__Styles();

  return <div className={classes.root}>__name__(sentenceCase)</div>;
};

__name__.defaultProps = {};
