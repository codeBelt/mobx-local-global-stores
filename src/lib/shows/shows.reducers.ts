import { Cast, Episode, Show } from "lib/type-defs.graphqls";
import { CastModel, EpisodeModel, ShowModel } from "./shows.models";

export const showReducer = (show: ShowModel): Show => {
  return {
    id: show?.id ?? 0,
    name: show?.name ?? '',
    summary: show?.summary ?? '',
    genres: show?.genres ?? [],
    image: show?.image?.medium ?? '',
    network: {
      id: show?.network?.id ?? null,
      name: show?.network?.name ?? '',
      country: {
        name: show?.network?.country?.name ?? '',
        code: show?.network?.country?.code ?? '',
        timezone:show?.network?.country?.timezone  ?? '',
      }
    }
  }
} 

export const castReducer = (cast: CastModel[]): Cast[] => {
  return cast.map(castMember => ({
    self: castMember.self,
    voice: castMember.voice,
    person:  {
      name: castMember.person.name,
      id: castMember.person.id,
      birthday: castMember?.person?.birthday ?? '',
      image: {
        medium: castMember.person.image.medium,
        original: castMember?.person?.image?.original
      }
    },
    character: {
      id: castMember.character.id,
      name: castMember.character.name,
      image: {
        original: castMember.character?.image?.original,
        medium: castMember?.character?.image?.medium,
      }
    }
  }))
}

export const episodeReducer = (episodes: EpisodeModel[]): Episode[] => {
  return episodes.map(episode => ({
    id: episode.id,
    season: episode.season,
    name: episode.name,
    number: episode.number,
    airdate: episode.airdate,
    image: {
      medium: episode.image.medium ?? '',
    },
    summary:episode.summary,
  }))
}