import { Component, OnInit } from '@angular/core';
import { ICricketList,ICricketerModel  } from '../interface/cricketer-list';
import { CricketerService } from '../services/cricketer.service';
import { CricketerDropDownService } from '../services/cricketer-drop-down.service';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonFunction } from "../common";

@Component({
  selector: 'app-ass1',
  templateUrl: './ass1.component.html',
  styleUrls: ['./ass1.component.css']
})
export class Ass1Component implements OnInit {

  private searchData: string;
  cricketerModel: ICricketList;
  cricketerDetail: ICricketList;
  
  constructor(private router:Router,private _cricketService: CricketerService, private _cricketerDropDown: CricketerDropDownService) { }
  
  ngOnInit() {  }
  
}
