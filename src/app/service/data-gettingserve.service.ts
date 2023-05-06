import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo, Todowork } from '../to-do/to-do.component';

@Injectable({
  providedIn: 'root'
})
export class DataGettingserveService {
  constructor( private _http:HttpClient) { }
   
    getById(id :any ){
    return this._http.get<Todowork>(`http://localhost:8080/jpa/user/todo/${id}`)
  }
  deleteid(id :any ){
    return this._http.delete(`http://localhost:8080/jpa/user/${id}`)
  }
  gettingAlldata( username :string){
    return this._http.get<Todowork[]>(`http://localhost:8080/jpa/user/${username}/todos`)
   }

 UpdateTodo(id:number,todo:Todowork){
  return this._http.put(`http://localhost:8080/jpa/user/update/${id}`,todo)
 }
 addTodo(todo:Todowork){
  let username=sessionStorage.getItem('authenticate')
  return this._http.post(`http://localhost:8080/jpa/user/${username}/newTodo`,todo)
 }
}
