import { Component, Optional, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Player } from "../../models/Player"; 
import { PlayersService } from "../../services/players.service";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit{

  public hasError: any;
  public loading: boolean;

  public players: Array<Player>;

  constructor(private _playersService: PlayersService) {
    
  }
  
  
  public ngOnInit() {
    this.fetchPlayers();  
    console.log(this.players);
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
  
  openDialog(){
    console.log('opening dialog');
    
  }  
  
}