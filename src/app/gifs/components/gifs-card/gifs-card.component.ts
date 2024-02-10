import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-gif-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {
  ngOnInit(): void {
    if(!this.gifFromInput) throw new Error("Gif property is required");
  }
  @Input()
  public gifFromInput!:Gif;
}
