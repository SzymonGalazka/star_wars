import { Resource } from 'rest-hooks';

export default class StarShipResource extends Resource {

  readonly name: string = '';
  readonly model: string = ''; 
  readonly starship_class: string = ''; 
  readonly manufacturer: string = '';
  readonly cost_in_credits: string = '';
  readonly length: string = '';
  readonly crew: string = '';
  readonly passengers: string = '';
  readonly max_atmosphering_speed: string = '';
  readonly hyperdrive_rating: string = '';
  readonly MGLT: string = '';
  readonly cargo_capacity: string = '';
  readonly consumables: string = '';
  readonly films: Array<String> = [];
  readonly pilots: Array<String> = [];
  readonly url: string = '';
  readonly created: string = '';
  readonly edited: string = '';

  // pk tells Rest Hooks how to normalize the data
  // we miss ids in distinct item
  pk() {
    return this.name.toString();
  }

  static urlRoot = 'https://swapi.co/api/starships/';
}