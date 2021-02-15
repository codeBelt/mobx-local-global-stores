export type CountryModel = {
  name: string;
  code: string;
  timezone: string;
};

export type ImageModel = {
  medium: string;
  original: string;
};

export type NetworkModel = {
  id: number;
  name: string;
  country: CountryModel;
};

export type ShowModel = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  summary: string;
  genres: string[];
  network: NetworkModel;
  image: ImageModel;
};

export type PersonModel = {
  id: number;
  name: string;
  birthday: string;
  image: ImageModel;
};

export type CharacterModel = {
  id: number;
  name: string;
  image: ImageModel;
};

export type CastModel = {
  person: PersonModel;
  character: CharacterModel;
  self: boolean;
  voice: boolean;
};

export type EpisodeModel = {
  id: number;
  season: number;
  number: number;
  name: string;
  airdate: string;
  image: ImageModel;
  summary: string;
};

export type EpisodeTableRowModel = {
  episode: number;
  name: string;
  date: string;
  image: string;
};

export type EpisodeTableModel = {
  title: string;
  rows: EpisodeTableRowModel[];
};
