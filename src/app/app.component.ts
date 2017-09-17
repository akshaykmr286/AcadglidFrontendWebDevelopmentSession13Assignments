import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from "./services/login.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SESSION 13 Assignments';
  loggedinuser:string;
  loggedin:boolean;
  constructor(private _loginserv:LoginService){}
  ngOnInit() {
    if(this._loginserv.isLoggedin()){
      this.loggedin = true;
    }else{
      this.loggedinuser = '';
      this.loggedin = false;
    }
  }
  logOut(){
    sessionStorage.removeItem('access_token');
  }

}
