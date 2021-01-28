import { getCastsRequest, getEpisodesRequest, getShowRequest } from "domains/shows/shows.services"
import { Cast, Episode, QueryCastArgs, QueryResolvers, QueryShowArgs, ResolversParentTypes, ResolverTypeWrapper, Show } from "lib/type-defs.graphqls"

export const getCastByShowId: QueryResolvers<Cast> = async (_parent, _args: QueryCastArgs, _context, _info): Promise<Cast[]> => {
  const castRequest = await getCastsRequest(_args.showId)
  
  const castOfShow = castRequest.data ?? []

  return castOfShow.map(cast => ({
    self: cast.self,
    voice: cast.voice,
    person: {
      name:cast.person.name,
       id:cast.person.id,
       birthday:cast.person.birthday ?? '',
       image:{
         medium: cast.person.image.medium,
         original: cast?.person?.image?.original
       }
    },
    character: {
      id:cast.character.id,
      name:cast.character.name,
      image: {
        original: cast.character?.image?.original,
        medium: cast?.character?.image?.medium,
      }
    }
  }))
}

export const getEpisodesByShowId = async (_parent, _args, _context, _info): Promise<Episode[]> => {
  const episodesRequest = await getEpisodesRequest(_args.showId)

  const episodes = episodesRequest.data ?? []

  return episodes.map(episode => ({
    id:episode.id,
    season:episode.season,
    name:episode.name,
    number: episode.number,
    airdate:episode.airdate,
    image: {
      medium: episode.image.medium ?? '',
    },
    summary:episode.summary,
  }))
}
