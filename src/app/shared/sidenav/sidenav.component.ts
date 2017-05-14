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
        name: 'Competitions',
        url: './Competitions'
      },
      {
        name: 'Playerslist',
        url: './ListPlayers'
      },
      {
        name: 'Rate a Player',
        url: './RatePlayers'
      }
    ];
  }
}
