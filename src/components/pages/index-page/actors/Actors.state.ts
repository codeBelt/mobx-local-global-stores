import { makeVar } from '@apollo/client';
import { ActorSortBy } from './actors-sort-option/ActorsSortOption.constants';

export const actorSortByVar = makeVar<ActorSortBy>(ActorSortBy.NAME);
