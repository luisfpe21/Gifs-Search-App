import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent {

  constructor(private gifsService:GifsService)
  { }

  get gifsListResult():Gif[]{
    return [...this.gifsService.lstGifs];
  }

  public lstTagsHistory: string[] = [...this.gifsService.tagsHistory];

}
