import { Show, ShowResolvers } from "lib/type-defs.graphqls";
import { ShowModel } from "./shows.models";

// TODO: assign showMapper to ShowResolvers ?
export const showMapper = {
  id: (show: ShowModel) => show?.id ?? 0,
  name: (show: ShowModel) => show?.name ?? '',
  summary: (show: ShowModel) => show?.summary ?? '',
  genres: (show: ShowModel) => show?.genres ?? [],
  image: (show: ShowModel) => show?.image?.medium ?? '',
  network: {
    id: (show: ShowModel) => show?.network?.id ?? null,
    name: (show: ShowModel) => show?.network?.name ?? '',
    country: {
      name: (show: ShowModel) => show?.network?.country?.name ?? '',
      code: (show: ShowModel) => show?.network?.country?.code ?? '',
      timezone: (show: ShowModel) => show?.network?.country?.timezone  ?? '',
    }
  }
}