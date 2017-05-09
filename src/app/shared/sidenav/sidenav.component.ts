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
        name: 'Food & Beverage',
        url: './TODO'
      }
    ];
  }
}
