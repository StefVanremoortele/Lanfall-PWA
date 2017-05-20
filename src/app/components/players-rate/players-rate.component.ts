import { Component, Optional, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Params } from "@angular/router";
import { Player } from "../../models/Player";
import { PlayersService } from "../../services/players.service";
import { FormControl } from "@angular/forms";
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-players-rate',
  templateUrl: './players-rate.component.html',
  styleUrls: ['./players-rate.component.scss']
})
export class PlayersRateComponent {

  public hasError: any;
  public loading: boolean;
  public navigated = false; // true if navigated here

  public players: Array<any>;
  public player:Player;

  stateCtrl: FormControl;
  filteredPlayers: any;

    
  constructor(
    private _playersService: PlayersService,
    private http: Http,
    private route: ActivatedRoute) {

      this.stateCtrl = new FormControl();
      this.filteredPlayers = this.stateCtrl.valueChanges
          .startWith(null)
          .map(name => this.filteredPlayers("name")) ;
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this._playersService.getPlayer(id)
            .then(player => this.player = player);
      } else {
        this.navigated = false;
        this.player = new Player();
      }
    });
  }


}
