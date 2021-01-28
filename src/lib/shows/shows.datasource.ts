import { RESTDataSource } from 'apollo-datasource-rest'
import environment from 'environment';
import { Cast, Episode, Show } from 'lib/type-defs.graphqls';
import { castReducer, episodeReducer, showReducer } from './shows.reducers';

export class ShowsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.api.showsBase
  }

  async getShowDetails(showId: string): Promise<Show> {
    const show = await this.get(
      `${showId}`, // path
    );

    return showReducer(show)
  }

  async getCast(showId: string): Promise<Cast[]> {
    const cast = await this.get(
      `${showId}/cast`, // path
    );
    
    return castReducer(cast)
  }

  async getEpisodes(showId: string): Promise<Episode[]> {
    const episodes = await this.get(
      `${showId}/episodes`, // path
    );

    return episodeReducer(episodes)
  }
}
