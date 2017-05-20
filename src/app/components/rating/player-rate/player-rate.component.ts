import { Component, Optional, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Location } from "@angular/common";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Player } from "../../..//models/Player";
import { PlayersService } from "../../../services/players.service";
import { FormControl } from "@angular/forms";
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-player-rate',
  templateUrl: './player-rate.component.html',
  styleUrls: ['./player-rate.component.scss']
})
export class PlayerRateComponent {

  public hasError: any;
  public loading: boolean;

  public player:Player;
  componentProperty:number;
  constructor( private playersService: PlayersService, private route: ActivatedRoute, private location: Location  ) 
  {

  }
  
  public ngOnInit(): void {
    this.route.params
      // tslint:disable-next-line:no-string-literal
      .switchMap((params: Params) => this.playersService.getPlayer(+params["id"]))
      .subscribe((player) => this.player = player);
    }


}
