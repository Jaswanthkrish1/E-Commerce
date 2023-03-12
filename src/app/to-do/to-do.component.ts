import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServeService } from '../service/auth-serve.service';
import { DataGettingserveService } from '../service/data-gettingserve.service';
import { TestServiceService } from '../service/test-service.service';
// storing responce or observable inside the interface. or class. 
//this is alos called type casting . getting ressponce from url is json formate. now we store the data in proper way

export class Todowork{
  constructor (
    public prbId: number,
    public name:String,
    public problam:String,
    public workComplited:Boolean,
    public date:Date,
    
  ){}
}
// storing responce or observable inside the interface. or class. 
//this is alos called type casting . getting ressponce from url is json formate. now we store the data in proper way
export interface todo{
  prbId: number,
    name:String,
    problam:String,
    workComplited:Boolean,
    date:Date
}
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent  implements OnInit{
  //Getting responce from url in the group of list items soo we create an reffrence for todo/Todowork class or interface. 
   Todos!: todo[]; 
   message!: String;
constructor( private _ToDoList:DataGettingserveService,private _authupdate:AuthServeService,
  private _route:Router,){}
  
//     new todo("1221","Krishna",'work',false,new Date()),
//     new todo("1222","Krishna",'work2',false,new Date()),
//     new todo("1223","Krishna",'work3',false,new Date()),
//     new todo("1224","Krishna",'wor4',false,new Date()),  
public deliteTodo(id:any){
this._ToDoList.deleteid(id).subscribe(
  responce=> {console.log(responce)
  this.message=`Record deleted successfully for ${id}`
  this.RefreshTodo()
  })

}
SaveTodo(){
 let id=-1;
  this._route.navigateByUrl(`todo/${id}`)
}
UpdateTodo(id:any){
 
  this._route.navigateByUrl(`todo/${id}`)
}
public RefreshTodo(){
  //This will inialize ones when the component get called.
  if(this._authupdate.Loginchecheck()){
    this._ToDoList.gettingallldata(this._authupdate.sendUserNameAsHttpPathVariable()).subscribe(data=>{
     this.Todos=data
     //getting data from url.
     console.log(this.Todos)
   })
 }
}
// ]
 ngOnInit(){
 this.RefreshTodo();
  }
}
