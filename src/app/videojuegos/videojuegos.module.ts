import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideojuegosComponent} from "./videojuegos.component";



@NgModule({
  declarations: [
    VideojuegosComponent
  ],
  exports:[
    VideojuegosComponent
  ],
  imports: [
  ]
})
export class VideojuegosModule { }
