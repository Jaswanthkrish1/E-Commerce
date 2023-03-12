import { Component } from '@angular/core';
import { AuthServeService } from 'src/app/service/auth-serve.service';
import { TestServiceService } from 'src/app/service/test-service.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  providers:[TestServiceService]
})
export class Test2Component {
  constructor(private _testserve:TestServiceService){};
 
}
