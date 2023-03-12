import { Component, OnInit } from '@angular/core';
import { AuthServeService } from '../service/auth-serve.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit{
  //isAuthenticated:boolean=false
constructor(public _loginckeck:AuthServeService){}
  ngOnInit(){
    //this.isAuthenticated= this._loginckeck.Loginchecheck(); 
  }
}
