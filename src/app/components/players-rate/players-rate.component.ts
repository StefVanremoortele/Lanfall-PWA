import { Component, Optional, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Player } from "../../models/Player";
import { PlayersService } from "../../services/players.service";
import { FormControl } from "@angular/forms";
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

  public players: Array<any>;

  stateCtrl: FormControl;
  filteredPlayers: any;

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  playernames = ['Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
    ];
    
  constructor(private _playersService: PlayersService) {
    this.stateCtrl = new FormControl();
    this.filteredPlayers = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterPlayers("name")) ;
  }

  filterPlayers(val: string) {
    return val ? this.playernames.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.playernames;
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

}
