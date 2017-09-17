import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';
import { Ass3Component } from './ass3/ass3.component';
import { Ass4Component } from './ass4/ass4.component';

import { AddCricketerAss1Component } from './ass1/add-cricketer-ass1/add-cricketer-ass1.component';
import { CricketerListAss1Component } from './ass1/cricketer-list-ass1/cricketer-list-ass1.component';
import { CricketerDetailAss1Component } from './ass1/cricketer-detail-ass1/cricketer-detail-ass1.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardComponent } from "./auth-guard";
import { UnsavedchangesGuardService } from './unsavedchanges-guard';
import { PlayerTypeResolveService } from './playertype.resolve.service';

const appRoutes: Routes = [
    
    { path: 'login', component: LoginComponent},
    { path: ' ', redirectTo: 'ass1',pathMatch: 'full' },
    { 
        path: 'ass1', 
        component: Ass1Component,
        canActivate: [AuthGuardComponent],
        children:[
            {path:'', redirectTo: 'add', pathMatch: 'full'},
            { 
                path: 'add', 
                component: AddCricketerAss1Component,
                canDeactivate: [UnsavedchangesGuardService],
                data: {
                message: 'Add a Cricketer'
                }
            },
            { path: 'list', component: CricketerListAss1Component},
            { path: 'cricketerDetail/:id', component: CricketerDetailAss1Component }
        ],
        resolve: { playerType : PlayerTypeResolveService }
    },
    { path: 'ass2', component: Ass2Component},
    { path: 'ass3', component: Ass3Component},
    { path: 'ass4', component: Ass4Component},
    { path: '**', redirectTo: 'ass1' }
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});