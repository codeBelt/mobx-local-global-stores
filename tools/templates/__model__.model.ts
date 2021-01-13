import { BaseModel } from 'sjs-base-model';

export class __model__Model extends BaseModel {
  readonly exampleProperty: string = '';

  /*
   * Client-Side properties (Not from API)
   */
  noneApiProperties: unknown = null;

  constructor(data: RecursivePartial<__model__Model>) {
    super();

    this.update(data);
  }

  update(data: RecursivePartial<__model__Model>): void {
    super.update(data);
  }
}
