import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo, Todowork } from '../to-do/to-do.component';

@Injectable({
  providedIn: 'root'
})
export class DataGettingserveService {
  constructor( private _http:HttpClient) { }
    getById(id :any ){
    return this._http.get<Todowork>(`http://localhost:8080/user/todo/${id}`)
  }
  deleteid(id :any ){
    return this._http.delete(`http://localhost:8080/user/${id}`)
  }
  gettingAlldata( username :string){
    return this._http.get<Todowork[]>(`http://localhost:8080/user/${username}/todos`)
   }

 UpdateTodo(id:number,todo:Todowork){
  return this._http.put(`http://localhost:8080/user/update/${id}`,todo)
 }
 addTodo(todo:Todowork){
  return this._http.post(`http://localhost:8080/user/post/newTodo`,todo)
 }
}
