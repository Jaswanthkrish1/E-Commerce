import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService, responceIntreface } from '../service/dataservice.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent {
  
  constructor(private routeractive: ActivatedRoute,
    private _dataservice: DataserviceService) { }
  name = sessionStorage.getItem('authenticate')
  Spring1="jaswanthkrishna"
  Spring=''
  

  getSpringData() {
    this._dataservice.dataServiceWithpathVariable(this.Spring1).subscribe(
     data =>  this.Spring=data.msg
    );

  }dataServiceWithpathVariable(){
    this._dataservice.dataServiceWithpathVariable(this.Spring1).subscribe(
      data =>  this.Spring=data.msg
    )
  }

}
