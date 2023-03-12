import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface responceIntreface
  {msg:string;}
@Injectable({providedIn: 'root'})
export class DataserviceService {
  constructor(private _http:HttpClient) { }
  dataServiceWithpathVariable(name: string){
    return this._http.get<responceIntreface>
    (`http://localhost:8080/GetclassData/Using-path-Variable/${name}`)
     ///GetclassData/Using-path-Variable/{name}
   }
   test(){
    alert("Getting data");
   }
}


