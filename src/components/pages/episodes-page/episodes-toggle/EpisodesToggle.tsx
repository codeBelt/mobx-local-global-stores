import React from 'react';
import { Button } from 'semantic-ui-react';
import { useLocalStore } from '../../../shared/local-store-provider/LocalStoreProvider';
import { EpisodesPageStore } from '../EpisodesPage.store';
import { EpisodesToggleOption } from './EpisodesToggle.constants';
import { observer } from 'mobx-react-lite';

export interface IProps {}

export const EpisodesToggle: React.FC<IProps> = observer((props) => {
  const localStore = useLocalStore<EpisodesPageStore>();

  return (
    <Button.Group>
      <Button
        positive={localStore.sortType === EpisodesToggleOption.ASC}
        onClick={() => localStore.setSortType(EpisodesToggleOption.ASC)}
      >
        Seasons Ascending
      </Button>
      <Button.Or />
      <Button
        positive={localStore.sortType === EpisodesToggleOption.DESC}
        onClick={() => localStore.setSortType(EpisodesToggleOption.DESC)}
      >
        Seasons Descending
      </Button>
    </Button.Group>
  );
});

EpisodesToggle.displayName = 'EpisodesToggle';
EpisodesToggle.defaultProps = {};
