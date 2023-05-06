import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchServiceService } from '../service/Search-service.service';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss','../../assets/Globe.scss']
})
export class ProductsListComponent implements OnInit{
filterdatavalue(selected: any) {
 
  if(selected>=1000){
    this.products=this.products.filter((pro:{price:any})=>pro.price>=selected  )
  }
 
  if(selected>=500){
    this.products=this.products.filter((pro:{price:any})=> pro.price>=selected  )
  }
  if(selected<=250){
    
    this.products=this.products.filter((pro:{price:any})=>pro.price<=selected  )
  }else{
    this.products=this.productData.changes;
}
  if(selected==0){
    this.products=this.productData.changes;
  }
}
productsfiltered:any;
public products:any;
public data:any;
selectedOption: any;
public recall:any;
constructor(public productData:SearchServiceService,
 private _router:Router,private _http:HttpClient,private _Acvtive:ActivatedRoute){
}

getData() {
  this._Acvtive.paramMap.subscribe(params => {
    this.data = params.get('data');
    let data1:any;
    if(this.data!=data1){
      this.products=this.productData.changes;
    }
    // Call your service to fetch data based on 'data'
    // Example: this.myService.getData(this.data).subscribe(response => this.myData = response);
  });
}
buyproduct(res:any){
  //console.warn(res.productid);
  this._router.navigate(['ProductDetails',res.productid])
//this.productData.data(res.productid)
}
ngOnInit(): void { 
  this.getData();
  this.products=this.productData.changes;
  this.recall=this.productData.changes;
 
  // this.products= this.productData.filterdarray;
  // this.data$=this.productData.getData();
 
}

}