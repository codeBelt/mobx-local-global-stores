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

