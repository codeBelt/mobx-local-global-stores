import { getCastsRequest, getShowRequest } from "domains/shows/shows.services"
import { Cast, Show } from "lib/type-defs.graphqls"

export const getCastByShowId = async (_parent, _args, _context, _info): Promise<Cast[]> => {
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

export const getShowByShowId = async (_parent, _args, _context, _info): Promise<Show> => {
  const showRequest = await getShowRequest(_args.showId)

  const show: Show = showRequest.data ?? {} as Show
  
  return {
    id: show.id ?? null,
    name: show.name ?? '',
    summary: show.summary ?? '',
    genres: show.genres ?? [],
    image: {
      original: show.image?.original,
      medium: show.image?.medium,
    },
    network: {
      id: show.network?.id ?? null,
      name: show?.network?.name ?? '',
      country: {
        name: show.network?.country?.name ?? '',
        code: show.network?.country?.code ?? '',
        timezone: show.network?.country?.timezone  ?? '',
      }
    }
  }
}

