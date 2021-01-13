export interface IImage {
  medium: string;
  original: string;
}

export interface IEpisode {
  id: number;
  season: number;
  number: number;
  name: string;
  airdate: string;
  image: IImage;
  summary: string;
}

export interface IEpisodeTableRow {
  episode: number;
  name: string;
  date: string;
  image: string;
}

export interface IEpisodeTable {
  title: string;
  rows: IEpisodeTableRow[];
}

export interface IPerson {
  id: number;
  name: string;
  birthday: string;
  image: IImage;
}

export interface ICharacter {
  id: number;
  name: string;
  image: IImage;
}

export interface ICast {
  person: IPerson;
  character: ICharacter;
  self: boolean;
  voice: boolean;
}

export interface IShow {
  id: number;
  name: string;
  summary: string;
  genres: string[];
  network: INetwork;
  image: IImage;
}

export interface INetwork {
  id: number;
  name: string;
  country: ICountry;
}

export interface ICountry {
  name: string;
  code: string;
  timezone: string;
}
