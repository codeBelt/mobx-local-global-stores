import React from 'react';
import { Card } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { IndexPageStore } from '../IndexPage.store';
import { ActorCard } from './actor-card/ActorCard';
import { ActorsSortOption } from './actors-sort-option/ActorsSortOption';

interface IProps {
  localStore: IndexPageStore;
}

export const Actors: React.FC<IProps> = observer((props) => {
  return (
    <>
      <Card.Group centered={true}>
        <ActorsSortOption localStore={props.localStore} />
      </Card.Group>
      <Card.Group centered={true}>
        {props.localStore.actors.map((model) => (
          <ActorCard key={model.person.name} cardData={model} />
        ))}
      </Card.Group>
    </>
  );
});
