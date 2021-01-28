import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import environment from 'environment';
import { CastModel, ShowModel } from './shows.models';

export class ShowsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.api.showsBase
  }

  async getShowDetails(showId: string): Promise<ShowModel> {
    return this.get(
      `${showId}`, // path
    );
  }

  async getCast(showId: string): Promise<CastModel> {
    const halp = await this.get(
      `${showId}/cast`, // path
    );

    console.log(halp)

    return halp
  }
}
