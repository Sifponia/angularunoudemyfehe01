import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {
  saludos: string = 'Hello world';
  base: number = 5;


  constructor() {
    console.log('VideojuegosComponent');
  }

  ngOnInit(): void {

  }

  suma(basee: number) {
    basee = 5;
    return this.base += basee;
  }

  resta(basee: number) {
    basee = 5;
    return this.base -= basee;
  }


}
