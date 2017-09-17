import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  user:string = 'NONE';
  isLoggedin():boolean{
     if (sessionStorage.getItem('access_token') == 'true') {
         return true;
     } else {
         return false;
     }
  }
}