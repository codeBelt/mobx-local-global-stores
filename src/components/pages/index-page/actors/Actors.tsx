import React, { useMemo } from 'react';
import { Card } from 'semantic-ui-react';
import { ActorCard } from './actor-card/ActorCard';
import { ActorsSortOption } from './actors-sort-option/ActorsSortOption';
import { useGetShowDetailsAndCastByShowIdQuery } from 'domains/shows/shows.graphql';
import { defaultShowId } from 'domains/shows/shows.constants';
import { actorSortByVar } from './Actors.state';
import orderBy from 'lodash.orderby';
import { useReactiveVar } from '@apollo/client';

interface IProps {}

export const Actors: React.FC<IProps> = (props) => {
  const actorSortBy = useReactiveVar(actorSortByVar);

  const { data } = useGetShowDetailsAndCastByShowIdQuery({
    variables: {
      showId: defaultShowId,
    },
  });

  const cast = useMemo(() => orderBy(data?.cast ?? [], (castMember) => castMember.person[actorSortBy], 'asc'), [
    actorSortBy,
    data?.cast,
  ]);

  return (
    <>
      <Card.Group centered={true}>
        <ActorsSortOption />
      </Card.Group>
      <Card.Group centered={true}>
        {cast.map((model) => (
          <ActorCard key={model.person.id} cardData={model} />
        ))}
      </Card.Group>
    </>
  );
};

Actors.displayName = 'Actors';
Actors.defaultProps = {};
