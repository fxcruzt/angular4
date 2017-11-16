import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';
import {  } from "";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public _authService: AuthenticationService,
              public _router: Router
    ){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(this._authService.isLoggedIn){
          return true;
      }
      console.log('Acceso Denegado.');
      this._router.navigate(['/login']);
      return false;
  }
}
