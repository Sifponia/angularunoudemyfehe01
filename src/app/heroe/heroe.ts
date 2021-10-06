export class Heroe {

  private _id: number;
  private _name: string;
  private _dano: number;
  private _vida: number;



  constructor(id: number, name: string, dano: number, vida: number) {
    this._id = id;
    this._name = name;
    this._dano = dano;
    this._vida = vida;
  }





  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dano(): number {
    return this._dano;
  }

  set dano(value: number) {
    this._dano = value;
  }

  get vida(): number {
    return this._vida;
  }

  set vida(value: number) {
    this._vida = value;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}


