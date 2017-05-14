import { Component, Optional, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Http } from "@angular/http";
import { Player } from "../../models/Player";
import { PlayersService } from "../../services/players.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit{

  public hasError: any;
  public loading: boolean;
  public player: Player;

 
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