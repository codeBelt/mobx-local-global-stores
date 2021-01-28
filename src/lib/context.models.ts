import { ShowsAPI } from "./shows/shows.datasource";

export type ContextModel = {
  dataSources: {
    ShowsAPI: ShowsAPI
  }
}
