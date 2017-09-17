import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardComponent implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('access_token')) {
      // this._router.navigate(['/as1/add']);
      return true;
    };
    this._router.navigate(['/login']);
    return false;
  }
}
