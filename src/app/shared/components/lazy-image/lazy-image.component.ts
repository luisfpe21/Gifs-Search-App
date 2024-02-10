import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if(!this.urlGifFromInput) throw new Error('Url not specificate.');
  }

  @Input()
  public urlGifFromInput!:string;

  @Input()
  public titleFromInput:string = 'No title';

  public hasLoaded:boolean = false;

  onLoadImage():void{
    // console.log("Imagen cargada");
    setTimeout(()=>{
      this.hasLoaded = true;
    },1000);
    // this.hasLoaded = true;
  }

}
