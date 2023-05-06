import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../service/Search-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss','../../assets/Globe.scss']
})
export class NavBarComponent implements OnInit{
  
  public filterdarray:any=[];
  public changes:any=[];

constructor( public searchService:SearchServiceService,private _router:Router,private _http:HttpClient){}
  
search(value:any){
  if(!value){
  alert("Enter data");
  }else{
 this.searchService.getfilter(value)
 }
}
ngOnInit(): void {
   
  }
}
 
  
 
  

