import React from 'react';
import { Card } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { IndexPageStore } from '../IndexPage.store';
import { ActorCard } from './actor-card/ActorCard';

interface IProps {
  localStore: IndexPageStore;
}

export const Actors: React.FC<IProps> = observer((props) => {
  return (
    <Card.Group centered={true}>
      {props.localStore.castsResults.data.map((model) => (
        <ActorCard key={model.person.name} cardData={model} />
      ))}
    </Card.Group>
  );
});
