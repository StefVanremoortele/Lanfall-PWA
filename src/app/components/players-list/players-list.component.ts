import { Component, Optional, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
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
  public error: any;
  public players: Player[];
  public selectedPlayer: Player;
  public offlineImage:string = './assets/images/avatars/no-picture.png';
  
  showNgFor = false;
  

  constructor(
    private router: Router,
    private playerService: PlayersService) {
    
  }

  getPlayers(): void {
    this.playerService
      .getPlayers()
      .then(players => this.players = players)
      .catch(error => this.error = error);
  }


  ngOnInit(): void {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  gotoDetail(): void {
    this.router.navigate(['/rate', this.selectedPlayer.id]);
  }
  
}