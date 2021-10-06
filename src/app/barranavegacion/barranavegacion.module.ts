import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarranavegacionComponent} from "./barranavegacion.component";
import {RouterModule, Routes} from "@angular/router";
import {HeroeComponent} from "../heroe/heroe.component";
import {VideojuegosComponent} from "../videojuegos/videojuegos.component";
import {DragonballzComponent} from '../dragonballz/dragonballz.component';
import {HomeComponent} from '../home/home.component';


const routes: Routes = [
  {path: 'homepage', component: HomeComponent},
  {path: 'heroes', component: HeroeComponent},
  {path: 'videojuegos', component: VideojuegosComponent},
  {path: 'dragonballz', component: DragonballzComponent},


];

@NgModule({
  declarations: [
    BarranavegacionComponent
  ],
  exports: [
    BarranavegacionComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class BarranavegacionModule {
}
