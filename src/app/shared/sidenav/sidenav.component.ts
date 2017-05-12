import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent {
  public navigationRoutes: Array<Object>;

  constructor() {
    this.navigationRoutes = [
      {
        name: 'Home',
        url: './Home'
      },
      {
        name: 'Players List',
        url: './PlayersList'
      },
      {
        name: 'Vote Players',
        url: './VotePlayers'
      },
      {
        name: 'Order@Seat',
        url: './OrderAtYourSeat'
      },
      {
        name: 'Competitions',
        url: './Competitions'
      },
      {
        name: 'Now Playing',
        url: './Now'
      },
      {
        name: 'Upcoming Matches',
        url: './Upcoming',
      },
      {
        name: 'Tabs Demo',
        url: './TabsDemo',
      }        
    ];
  }
}
