import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServeService {
  constructor(private router: Router) {}
  //used for store the authenticated username.
  private CanIadd:Boolean|any;
  private _local = '';
  public get local() {
    return this._local;
  }
  public set local(value) {
    this._local = value;
  }
  
  //athenticate the user is registred or not if registerd then set sessionstorage  with user valid user name.
  authanticate(username: any, password: any) {
    if (username === 'jaswanth' && password === 'dummy') {
      this.local = username;
      //('before'+this.Loginchecheck())
      sessionStorage.setItem('authenticate', username);
      //('after'+this.Loginchecheck())
      return true;
    }
    return false;
  }
  //for athenticating the menu bar  if the session storage have stored the username then activate the menu bar .
  Loginchecheck() {
    let user = sessionStorage.getItem('authenticate');
    return !(user === null);
  }
  //for cleaing the data from session storage for logout perpose
  logoutcheck() {
    let userlogout = sessionStorage.clear();
  }
  Loginchechecked() {
    let user = sessionStorage.getItem('authenticate');
    this.router.navigate(['wellcome', user]);
  }
  // this method is used for sending the athenticated user name is avilable.else null.
  sendUserNameAsHttpPathVariable() {
    return this.local;
  }
}
