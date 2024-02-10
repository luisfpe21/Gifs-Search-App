import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SearchComponent } from './components/search/search.component';
import { ListadoComponent } from './components/listado/listado.component';




@NgModule({
  declarations: [
    HomePagesComponent,
    SearchComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePagesComponent
  ]
})
export class GifsModule { }
