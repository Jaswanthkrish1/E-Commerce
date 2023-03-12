import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AuthServeService } from '../service/auth-serve.service';
import { DataGettingserveService } from '../service/data-gettingserve.service';
import { Todowork } from '../to-do/to-do.component';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.scss']
})
export class UpdateDeleteComponent implements OnInit{
constructor(private _SaveUpdate:DataGettingserveService,
  private _routeractive:ActivatedRoute,private _httpNavigate:Router,
  private _authServe:AuthServeService){}
  ngOnInit(){
    this.Saveupdate();
    
    }
 validate!:Boolean;
  id!: number;
  todo: Todowork|any;
  get:boolean|any;
  // Cansave(){
  //   this.id=this._routeractive.snapshot.params['id'];
  //   if(this.id==-1|| this.id==0)
  //   {
  //     this.validate=true
  //   }else  this.validate=false
  //  }
  Saveupdate(){
    this.id=this._routeractive.snapshot.params['id'];
    this.todo =new Todowork(this.id,'','',false,new Date())
if(this.id!=-1){
this._SaveUpdate.getById(this.id).subscribe(data=>this.todo=data)}
  }



  save(){
    if(this.id = -1){
      //new Update
      this._SaveUpdate.addTodo(this.todo).subscribe
    (data=>{console.log(data)
      this._httpNavigate.navigate(['/todo'])
    })
    }else{
    this._SaveUpdate.UpdateTodo(this.id,this.todo).subscribe
    (data=>{console.log(data)
      this._httpNavigate.navigate(['/todo'])
    })}
  }
  saveNew(){
    this._SaveUpdate.addTodo(this.todo)
  }
}
