import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideojuegosComponent} from "../videojuegos/videojuegos.component";
import {HeroeComponent} from "./heroe.component";



@NgModule({
  declarations: [
    HeroeComponent

  ],
  exports:[
    HeroeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroeModule { }
