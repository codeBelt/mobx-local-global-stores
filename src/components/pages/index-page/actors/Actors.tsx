import React from 'react';
import { Card } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { IndexPageStore } from '../IndexPage.store';
import { ActorCard } from './actor-card/ActorCard';
import { ActorsSortOption } from './actors-sort-option/ActorsSortOption';
import { useLocalStore } from '../../../shared/local-store-provider/LocalStoreProvider';

interface IProps {}

export const Actors: React.FC<IProps> = observer((props) => {
  const localStore = useLocalStore<IndexPageStore>();

  return (
    <>
      <Card.Group centered={true}>
        <ActorsSortOption />
      </Card.Group>
      <Card.Group centered={true}>
        {localStore.actors.map((model) => (
          <ActorCard key={model.person.name} cardData={model} />
        ))}
      </Card.Group>
    </>
  );
});

Actors.displayName = 'Actors';
Actors.defaultProps = {};
