import { getCastsRequest, getEpisodesRequest, getShowRequest } from "domains/shows/shows.services"
import { Cast, Episode, QueryCastArgs, QueryResolvers, QueryShowArgs, ResolversParentTypes, ResolverTypeWrapper, Show } from "lib/type-defs.graphqls"
import { castMapper, showMapper } from "./shows.mappers"

export const getEpisodesByShowId = async (_parent, _args, _context, _info): Promise<Episode[]> => {
  const episodesRequest = await getEpisodesRequest(_args.showId)

  const episodes = episodesRequest.data ?? []

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

export const showResolvers = {
  Cast: castMapper,
  Show: showMapper,
}