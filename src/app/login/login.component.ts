import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServeService } from '../service/auth-serve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 constructor(public authserve:AuthServeService,private router:Router){}
 invalidLogin=false
  errorMessage="Plese provide valid details"
  username="jaswanth"
  password=''
  logcontrol(){
    if (this.authserve.authanticate(this.username,this.password)) {
       this.router.navigate(['wellcome',this.username])
     this.invalidLogin=false;
     
    }else this.invalidLogin=true
  }
 
}
