import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServeService } from './auth-serve.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardSevrService implements CanActivate {

  constructor(private _authParam:AuthServeService,private _route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   if(this._authParam.Loginchecheck()){
     return true ;
  }return false;
  }
 
}
