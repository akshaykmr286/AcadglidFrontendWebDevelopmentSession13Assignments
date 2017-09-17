import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CricketerDropDownService } from './services/cricketer-drop-down.service';


@Injectable()
export class PlayerTypeResolveService implements Resolve<any> {

  constructor(private _cricketerDropDown: CricketerDropDownService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this._cricketerDropDown.getPlayerType();
  }
}
