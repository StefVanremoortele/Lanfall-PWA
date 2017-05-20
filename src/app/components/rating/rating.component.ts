import { Component, Optional, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Params } from "@angular/router";
import { Player } from "../../models/Player";
import { PlayersService } from "../../services/players.service";
import { FormControl } from "@angular/forms";
import {Observable} from "rxjs/Rx";
import { Router } from '@angular/router';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  public hasError: any;
  public loading: boolean;

  public players: Player[] = [];
  public player:Player;
    
  constructor(
    private router: Router,
    private _playersService: PlayersService) {
  }
  
  ngOnInit(): void {
    this._playersService.getPlayers()
      .then(players => this.players = players);
  }
  gotoDetail(player: Player): void {
    const link = ['/rate', player.id];
    this.router.navigate(link);
  }

}
