export type CountryModel =  {
  name: string
  code: string
  timezone: string
}

export type ImageModel = {
  medium: String
  original: String
}

export type NetworkModel = {
  id: number
  name: string
  country: CountryModel
}

export type ShowModel = {
  id: number
  url: string
  name: string
  type: string
  language: string
  summary: string
  genres: string[]
  network: NetworkModel
  image: ImageModel
}

export type PersonModel = {
  id: number
  name: String
  birthday: String
  image: ImageModel
}

export type CharacterModel = {
  id: number
  name: string
  image: ImageModel
}

export type CastModel = {
  person: PersonModel
  character: CharacterModel
  self: boolean
  voice: boolean
}
