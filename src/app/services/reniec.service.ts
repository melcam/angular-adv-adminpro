import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReniecService {
_url='https://dni.optimizeperu.com/api/persons/72227475';
  constructor(
    private http:HttpClient
  ) { 
    console.log("Este es un servicio reniec")
  }
  getDni(){
    let heades=new HttpHeaders().set('type-content','aplication/json');
    return this.http.get(this._url,{headers:heades});
  }
}
