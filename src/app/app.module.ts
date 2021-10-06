import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroeModule} from "./heroe/heroe.module";
import {VideojuegosModule} from "./videojuegos/videojuegos.module";
import {DragonballzModule} from "./dragonballz/dragonballz.module";
import {BarranavegacionModule} from "./barranavegacion/barranavegacion.module";
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from "./home/home.module";


const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroeModule,
    VideojuegosModule,
    DragonballzModule,
    BarranavegacionModule,
    RouterModule.forRoot(routes),
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
