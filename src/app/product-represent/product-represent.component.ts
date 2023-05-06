import { Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import '../../assets/MagnifyProduct.d.js'
import { SearchServiceService } from '../service/Search-service.service';
@Component({
  selector: 'app-product-represent',
  templateUrl: './product-represent.component.html',
  styleUrls: ['./product-represent.component.scss','../../assets/Globe.scss']
})

export class ProductRepresentComponent implements OnInit {
  isReloaded=false;
  activatedUrl=1;
  
  constructor(private _active:ActivatedRoute,private service:SearchServiceService,private router: Router,){
    
  }
 items1:any;
  itemid:any;
  product:any;
  
  
  // items = [
  //   {
  //     image: '../../assets/img/53.png',
  //     Active:'active',
  //     id:0
  //   },
  //   {
  //     image: '../../assets/img/54.png',
      
  //     id:1
  //   },
  //   {
  //     image: '../../assets/img/55.png',
      
  //     id:2
  //   },{
  //     image: '../../assets/img/56.png',
      
  //     id:3
  //   }
  // ];
 
 
ngOnInit(): void {
    this._active.paramMap.subscribe(params => {
      debugger
      this.itemid= params.get('data')});     
if(this.itemid){
  console.warn(this.itemid)
  this.items1=this.service.data(this.itemid);
}
  
   
  }
 

  


}


