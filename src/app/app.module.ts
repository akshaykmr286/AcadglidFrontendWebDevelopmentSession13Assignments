import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';
import { Ass3Component } from './ass3/ass3.component';
import { Ass4Component } from './ass4/ass4.component';

import { routing }        from './app.route';

import { CricketerService } from "./services/cricketer.service";
import { CricketerDropDownService } from "./services/cricketer-drop-down.service";
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CpitalizeFirstPipe } from './pipes/cpitalize-first.pipe';

import { AddCricketerAss1Component } from './ass1/add-cricketer-ass1/add-cricketer-ass1.component';
import { CricketerListAss1Component } from './ass1/cricketer-list-ass1/cricketer-list-ass1.component';

import { PubliServiceService } from "./services/publi-service.service";
import { CricketerDetailAss1Component } from './ass1/cricketer-detail-ass1/cricketer-detail-ass1.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from "./services/login.service";
import { AuthGuardComponent } from './auth-guard';
import { UnsavedchangesGuardService } from './unsavedchanges-guard';
import { PlayerTypeResolveService } from './playertype.resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    Ass1Component,
    Ass2Component,
    Ass3Component,
    Ass4Component,
    OrderByPipe,
    SearchPipe,
    CpitalizeFirstPipe,
    AddCricketerAss1Component,
    CricketerListAss1Component,
    CricketerDetailAss1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [CricketerService,CricketerDropDownService,PubliServiceService,LoginService,UnsavedchangesGuardService,AuthGuardComponent,PlayerTypeResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
