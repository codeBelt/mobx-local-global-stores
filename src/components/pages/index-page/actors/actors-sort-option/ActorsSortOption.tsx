import React from 'react';
import { Select } from 'semantic-ui-react';
import { actorSortOptions } from './ActorsSortOption.constants';
import { IndexPageStore } from '../../IndexPage.store';

interface IProps {
  localStore: IndexPageStore;
}

export const ActorsSortOption: React.FC<IProps> = (props) => {
  return (
    <Select
      placeholder="Actors Sort Options"
      onChange={(event, data) => props.localStore.setSortOption(data.value as string)}
      options={actorSortOptions}
    />
  );
};

ActorsSortOption.defaultProps = {};
