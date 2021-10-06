import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {DragonballzComponent} from './dragonballz.component';
import {DragonballzService} from "./dragonballz.service";


@NgModule({
  declarations: [
    DragonballzComponent
  ],
  exports: [
    DragonballzComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [//Se usa para servicios
    DragonballzService//
  ]
})
export class DragonballzModule {
}
