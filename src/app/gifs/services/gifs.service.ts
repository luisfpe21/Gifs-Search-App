import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory:string[] = [];

  private lstGifsResult:Gif[] = [];

  private _apiKey:string = "MB30cGv4UJbJk0a6IZ5yuyk3YPoJtRWc";

  private _urlApi:string = "https://api.giphy.com/v1/gifs/";

  constructor(private httpClient:HttpClient) {
    this.readLocalStorage();
    console.log("Gif service ready");
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  async searchTag(nameTag:string):Promise<void>{
    if(nameTag === '') return;
    this.filterHistory(nameTag);

    //CON FETCH Y THEN
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=MB30cGv4UJbJk0a6IZ5yuyk3YPoJtRWc&q=valorant&limit=10')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data));

    //CON AWAIT Y CONSTANTES
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=MB30cGv4UJbJk0a6IZ5yuyk3YPoJtRWc&q=valorant&limit=10');
    // const data = await resp.json();
    // console.log(data);

    //CON HTTPCLIENT DE ANGULAR
    // this.httpClient.get(`${this._urlApi}search?api_key=${this._apiKey}&q=${nameTag}&limit=10`)
    //   .subscribe(
    //     resp => {
    //       console.log(resp);
    //     }
    //   );

    // CON HTTPCLIENT DE ANGULAR (Usando HttpParams)
    // const params = new HttpParams()
    //   .set('api_key', this._apiKey)
    //   .set('q', nameTag)
    //   .set('limit','10');

    // this.httpClient.get(`${this._urlApi}search?`,{params:params})
    // .subscribe(
    //   resp => {
    //     console.log(resp);
    //   }
    // );

    //CON HTTPCLIENT DE ANGULAR (Usando HttpParams e Interface)
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', nameTag)
      .set('limit','10');

    this.httpClient.get<SearchResponse>(`${this._urlApi}search?`,{params:params})
    .subscribe(
      resp => {
        this.lstGifsResult = resp.data;
        // console.log(resp.data);
        // console.log({gifs: this.lstGifsResult});
      }
    );
  }

  private filterHistory(nameTag:string):void{
    nameTag = nameTag.toLowerCase();

    if(this.tagsHistory.includes(nameTag))
      this._tagsHistory = this._tagsHistory.filter(t => t.toLowerCase() !== nameTag)

    this._tagsHistory.unshift(nameTag);

    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
    // if(this.tagsHistory.length > 10)
      // this._tagsHistory.splice(9);
  }

  get lstGifs(){
    return [...this.lstGifsResult];
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private readLocalStorage():void{

    if(!localStorage.getItem('history')) return;

    console.log(localStorage.getItem('history'));

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);


  }

}
