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
    ) { }
  name = sessionStorage.getItem('authenticate')
  
}
