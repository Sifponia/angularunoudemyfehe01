import {Component, OnInit} from '@angular/core';
import {Heroe} from "./heroe";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {


  heroe: Heroe [] = [
    new Heroe(1, "IronaMan", 100, 80),
    new Heroe(2, "Capitan America", 80, 60),
    new Heroe(3, "Oscar", 80, 60),
  ]

  cambiarNombre() {
    this.heroe[0].name = 'SpiderMan';
  }

  nameBDelete: string = ' ';
  valida: boolean = false;

  removerElemento() {
    const a = this.heroe.shift();
    if (a instanceof Heroe) {
      this.valida = true;
      this.nameBDelete = a.name;
    }

  }


  constructor() {

  }

  ngOnInit(): void {

  }

}



