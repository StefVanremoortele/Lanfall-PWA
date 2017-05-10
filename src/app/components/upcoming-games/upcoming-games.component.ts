import { Component } from '@angular/core';

@Component({
  selector: 'upcoming-games',
  templateUrl: './upcoming-games.component.html'
})
export class UpcomingGamesComponent {

  public hasError: any;
  public loading: boolean;

  constructor() {
    
  }
  
}
