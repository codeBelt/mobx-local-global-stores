import React from 'react';
import { Button } from 'semantic-ui-react';
import { episodesSortByVar } from '../EpisodesPage.state';
import { useReactiveVar } from '@apollo/client';
import { SortDirection } from 'constants/common.types';
import { toastSuccessMessage } from 'domains/toasts/toasts.utils';

export interface IProps {}

export const EpisodesToggle: React.FC<IProps> = (props) => {
  const sortBy = useReactiveVar(episodesSortByVar);

  return (
    <Button.Group>
      <Button
        positive={sortBy === SortDirection.ASCENDING}
        onClick={() => {
          toastSuccessMessage('You sorted seasons ascending');
          episodesSortByVar(SortDirection.ASCENDING);
        }}
      >
        Seasons Ascending
      </Button>
      <Button.Or />
      <Button
        positive={sortBy === SortDirection.DESCENDING}
        onClick={() => {
          toastSuccessMessage('You sorted seasons descending');
          episodesSortByVar(SortDirection.DESCENDING);
        }}
      >
        Seasons Descending
      </Button>
    </Button.Group>
  );
};

EpisodesToggle.displayName = 'EpisodesToggle';
EpisodesToggle.defaultProps = {};
