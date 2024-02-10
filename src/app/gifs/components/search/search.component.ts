import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search',
  template: `
    <h3>Busqueda</h3>
    <input #txtSearch
      (keyup.enter)="searchGifs()"
      class="form-control form-control-sm"
      type="text"
      placeholder="Buscar gifs...">
      <!-- Mandar el valor del input desde el html -->
      <!-- (keyup.enter)="searchGifs(txtSearch.value)" -->
    `
})
export class SearchComponent {

  @ViewChild('txtSearch')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService )
  {  }

  //Mandando el valor desde la funcion en el HTML
  // public searchGifs(name:string):void{
  //   if(name === '') return;
  //   console.log(name);
  // }

  //Usando el ViewChild para enlazar el valor
  public searchGifs():void{
    const tagFromChild = this.tagInput.nativeElement.value;
    //La validación queda del lado del service
    // if(tagFromChild === '') return;
    this.gifsService.searchTag(tagFromChild);
    this.tagInput.nativeElement.value = '';
  }
}
