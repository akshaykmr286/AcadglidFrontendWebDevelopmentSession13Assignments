import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CricketerService } from "../../services/cricketer.service";
import { ICricketList } from '../../interface/cricketer-list';

@Component({
  selector: 'app-cricketer-detail-ass1',
  templateUrl: './cricketer-detail-ass1.component.html',
  styleUrls: ['./cricketer-detail-ass1.component.css']
})
export class CricketerDetailAss1Component implements OnInit {

  id: number;
  private sub: any;
  page: number;
  private queryParameter: any;
  allPlayers: ICricketList[];
  selectedPlayer;
  constructor(private route:ActivatedRoute,private cricketerServ: CricketerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.allPlayers = this.cricketerServ.getCricketerList();
      this.selectedPlayer = this.allPlayers[this.id - 1];
     // console.log(this.getObj(this.id,this.cricketerServ.getCricketerList()));
    });
    console.log();
  }

 /* ngOnDestroy() {
    this.sub.unsubscribe();
    this.queryParameter.unsubscribe();
  }*/

getObj(idYourAreLookingFor,array){
  var elementPos = array.map(function(x) {return x.id; }).indexOf(idYourAreLookingFor);
  var objectFound = array[elementPos];
  return objectFound;
}
  
}
