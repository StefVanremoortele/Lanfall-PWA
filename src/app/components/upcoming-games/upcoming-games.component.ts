import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html'
})
export class UpcomingGamesComponent {

  public hasError: any;
  public loading: boolean;

  constructor() {
    
  }
  
}