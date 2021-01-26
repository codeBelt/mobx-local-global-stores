export enum ActorSortBy {
  NAME = 'name',
  BIRTHDAY = 'birthday',
}

export const actorSortOptions = [
  { value: ActorSortBy.NAME, text: 'Actor Name' },
  { value: ActorSortBy.BIRTHDAY, text: 'Birth Date' },
];
