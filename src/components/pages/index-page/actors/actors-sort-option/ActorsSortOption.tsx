import React from 'react';
import { Select } from 'semantic-ui-react';
import { actorSortOptions } from './ActorsSortOption.constants';
import { IndexPageStore } from '../../IndexPage.store';
import { useLocalStore } from '../../../../shared/local-store-provider/LocalStoreProvider';

interface IProps {}

export const ActorsSortOption: React.FC<IProps> = (props) => {
  const localStore = useLocalStore<IndexPageStore>();

  return (
    <Select
      placeholder="Actors Sort Options"
      onChange={(event, data) => localStore.setSortOption(data.value as string)}
      options={actorSortOptions}
    />
  );
};

ActorsSortOption.defaultProps = {};
