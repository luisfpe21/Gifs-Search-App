import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SearchComponent } from './components/search/search.component';
import { ListadoComponent } from './components/listado/listado.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';

@NgModule({
  declarations: [
    HomePagesComponent,
    SearchComponent,
    ListadoComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePagesComponent
  ]
})
export class GifsModule { }
