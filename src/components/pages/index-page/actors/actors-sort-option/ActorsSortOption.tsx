import React from 'react';
import { Select } from 'semantic-ui-react';
import { ActorSortBy, actorSortOptions } from './ActorsSortOption.constants';
import { actorSortByVar } from '../../IndexPage.state';

interface IProps {}

export const ActorsSortOption: React.FC<IProps> = (props) => {
  return (
    <Select
      placeholder="Actors Sort Options"
      onChange={(event, data) => actorSortByVar(data.value as ActorSortBy)}
      options={actorSortOptions}
    />
  );
};

ActorsSortOption.displayName = 'ActorsSortOption';
ActorsSortOption.defaultProps = {};
