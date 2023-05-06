import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  constructor(public _router:Router,private _route:ActivatedRoute,private _http:HttpClient) { }
    public searchdata:any;
  public filterdarray:any=[];
  public changes:any=[];
  transfordata :any=[];
 
  // hardcoded data
  items = [
    {
      title: "Fjallraven - soft, Fits 15 Laptops",
      price: 101.95,
      productid:10,
      imagenavigate1:'../../assets/img/55.png',
      item:[
        {
           Active:'active',
           id:'0',
          imagenavigate1:'../../assets/img/55.png'
        },
        {
          id:'1',
          imagenavigate1:'../../assets/img/56.png'
        },
        {
          id:'2',
          imagenavigate1:'../../assets/img/55.png'
        },
        {
          id:'3',
          imagenavigate1:'../../assets/img/55.png'
        },
       
       ],
      
      
    },
    {
      title: "Fjallraven - soft, Fits 15 Laptops",
      price: 101.95,
      productid:19,
      imagenavigate1:'../../assets/img/52.png',
 item:[
  {
     Active:'active',
          id:'0',
          imagenavigate1:'../../assets/img/52.png'
  },
  {
    id:'1',
    imagenavigate1:'../../assets/img/56.png'
  },
  {
    id:'2',
    imagenavigate1:'../../assets/img/55.png'
  },
  {
    id:'3',
    imagenavigate1:'../../assets/img/55.png'
  },
  
 ],
      
    },
    {
      title: "Fjallraven - soft, Fits 15 Laptops",
      productid:20,
      price: 101.95,
      imagenavigate1:'../../assets/img/56.png',

      item:[
        {
           Active:'active',
                id:'0',
                imagenavigate1:'../../assets/img/56.png'
        },
        {
          id:'1',
          imagenavigate1:'../../assets/img/56.png'
        },
        {
          id:'2',
          imagenavigate1:'../../assets/img/55.png'
        },
        {
          id:'3',
          imagenavigate1:'../../assets/img/55.png'
        },
        
       ],
      
    },
  ];
 
  // Calling the  Api which returns a list Of products 
  OnloadData(){
  // this._http.get("https://fakestoreapi.com/products").subscribe(res => {
    
  // });
  this.filterdarray = this.items;
 }
   //This is to get the from the nav component
  getfilter(searchTerm: any){
        // Calling the  Api which returns a list Of products 
    this.OnloadData();
    // console.log(this.changes); // you can do any processing with this data here
    if(searchTerm){
   const data =this.filterdarray.filter((product:{title:String}) =>{
    return product.title.toLowerCase().includes(searchTerm.toLowerCase())});
    this.changes =data;}
    // if the data is avilabe the redirect to the products page 
   this.call(searchTerm);
  }
  // After filter  we redirect to products page
  call(searchTerm:any){
    if(this.changes.length){
      this._router.navigate(['Products',searchTerm])
      }
     }

    
     // for the representation product
    data(res:Number):any{
      const item = this.items.find((item) => item.productid == res);
      if(item){
        console.warn(item)
     this._router.navigate(['ProductDetails',res]); 
        return item;
      }
      //hear we can prepare else part
      else{ this._router.navigate(['test'])  }
      } 
    }
    

  
   

