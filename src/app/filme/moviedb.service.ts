import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private APIURL:string = "https://api.themoviedb.org/3/";
  constructor(private http: HttpClient) {}

  public teste():void{
    //alert a função funcionou
  }

  getMovie(){
    this.teste();
    this.http.get(this.APIURL + "movie/latest" + this.getApiKey()).subscribe(
      data => {
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
        console.log(obj_json);
      }, error => {
        console.log(error);
      }
    );
  }

  private getApiKey(): string {
    return "?api_key=";
  }

}
