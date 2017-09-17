import { Component, OnInit } from '@angular/core';
import { ICricketList,ICricketerModel  } from '../../interface/cricketer-list';
import { CricketerService } from '../../services/cricketer.service';
import { CricketerDropDownService } from '../../services/cricketer-drop-down.service';
import { IPlayerType } from '../../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonFunction } from "../../common";

@Component({
  selector: 'app-add-cricketer-ass1',
  templateUrl: './add-cricketer-ass1.component.html',
  styleUrls: ['./add-cricketer-ass1.component.css']
})
export class AddCricketerAss1Component implements OnInit {

 /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];

  private searchData: string;
  cricketerModel: ICricketList;
  cricketerDetail: ICricketList;
  constructor(private router:Router,private _cricketService: CricketerService, private _cricketerDropDown: CricketerDropDownService) { }
  
  ngOnInit() {
    this.cricketModel();
    this.playerType = this._cricketerDropDown.getPlayerType();
    this.cricketersArray = this._cricketService.getCricketerList();
  }

  cricketModel() {
    /**Define default values */
    return this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: '',
      yearlyIncome: null,
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a cricket */
  addCriketer(values) {
    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      playerType: values.playerType,
      yearlyIncome: values.YearlyIncome,
      dob: values.Dob
    };
    // /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    // setting the array to use in oither component
    this._cricketService.getCricketerList();
    this.router.navigate(['/ass1/list']);
    
  };
 canDeactivate() {
    if (this.cricketerModel.firstName !== '') {
      return window.confirm('Are you sure you don’t want to save the data?');
    }
    return true;
  }
}
