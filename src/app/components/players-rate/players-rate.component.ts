import { Component, Optional, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Player } from "../../models/Player";
import { PlayersService } from "../../services/players.service";

@Component({
  selector: 'app-players-rate',
  templateUrl: './players-rate.component.html',
  styleUrls: ['./players-rate.component.scss']
})
export class PlayersRateComponent {

  public hasError: any;
  public loading: boolean;

  private players: Array<any>;
  


  constructor(private _playersService: PlayersService) {
    
  }

  public ngOnInit() {
    this.fetchPlayers();  
  }

  fetchPlayers(){
    this.loading = true;
      this._playersService.getPlayers().subscribe(
        (res) => {
          this.players = res;
          this.loading = false;
          this.hasError = false;
          console.log("Successfully fetched players");
          console.log(res)
        },
        () => {
          this.hasError = true;
          this.loading = false;        
          console.log("error fetching players");
        }
      );
      console.log(this.hasError);
  }

}
