import { Component, OnInit } from '@angular/core';
import { ILoginList } from '../interface/cricketer-list';
import { CricketerService } from '../services/cricketer.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel:ILoginList[] = [];
  isLoggedin:boolean;
  loginErr:boolean = false;
  constructor(private router:Router,private loginServ:LoginService) { }
  
  ngOnInit() {
    /*check if user lof=ggedin Already*/
  /* let chkLogin = this.loginServ.isLoggedin();
   if (chkLogin) {
     this.isLoggedin = true;
      this.router.navigate(['/ass1/add']);
   } else {
     this.isLoggedin = false;
     this.router.navigate(['/login']);
   }*/

  }

  /**Do Login */
  logIn(values) {
    if (values.username == 'test' && values.password == 'test') {
       sessionStorage.setItem('access_token', 'true');
        this.router.navigate(['/ass1/add']);
    } else {
      this.loginErr = true;
    }    
  };

}
