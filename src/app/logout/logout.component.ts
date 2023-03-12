import { Component, OnInit } from '@angular/core';
import { AuthServeService } from '../service/auth-serve.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  constructor(private _logoutcheck:AuthServeService){}
  ngOnInit(){
    this._logoutcheck.logoutcheck()
  }

}
