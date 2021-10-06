import {Injectable} from '@angular/core';
import {Personaje} from "./personaje";

@Injectable({
  providedIn: 'root'
})
export class DragonballzService {


  private _personaje: Personaje [] = [{
    id: 0,
    name: 'Test',
    power: 0
  }];

  constructor() {
    console.log('services initialize')
  }

  get personaje(): Personaje[] {
    return this._personaje;//Rompe la referencia
  }

  set personaje(value: Personaje[]) {
    this._personaje = value;
  }

  addPerson(personaje: Personaje) {
    this._personaje.push(personaje);
  }

  deletePerson() {
    this._personaje.shift();
  }
}
