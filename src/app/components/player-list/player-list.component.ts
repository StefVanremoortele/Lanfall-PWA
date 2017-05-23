import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from "../../models/Player";
import { PlayerService } from "../../services/player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  public hasError: any;
  public loading: boolean;
  public players: Player[] = [];

  constructor(
    private router: Router,
    private _playerService: PlayerService) {
  }

  public ngOnInit() {
    this.loading = true;
    this._playerService.getPlayers()
            .then(players => this.players = players)
            .then(() => this.loading = false);
  }


  gotoDetail(player: Player): void {
    const link = ['/detail', player.id];
    this.router.navigate(link);
  }

}
