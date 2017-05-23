import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { PlayerService } from "../../services/player.service";
import {Player} from "../../models/Player";

@Component({
  selector: 'app-player-detail-component',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  
  @Input() player: Player;
  @Output() close = new EventEmitter();

  public hasError:any;
  public loading: boolean;
  public navigated = false; // true if navigated here

  public constructor(private playersService: PlayerService, private route: ActivatedRoute,) {
  }

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.playersService.getPlayer(id)
            .then(player => this.player = player)
            .then(() => this.loading = false)
            .catch((error) => this.hasError = error);;
      } else {
        this.navigated = false;
        this.player = new Player();
        this.loading = false;
        this.hasError = true;
      }
    });
  }

  save(): void {
    this.playersService
        .save(this.player)
        .then(player => {
          this.player = player; // saved Player, w/ id if new
          this.goBack(player);
        })
        .catch(error => this.hasError = error); // TODO: Display error message
  }

  goBack(savedPlayer: Player = null): void {
    this.close.emit(savedPlayer);
    if (this.navigated) { window.history.back(); }
  }
}
