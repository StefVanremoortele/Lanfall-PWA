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
        name: 'competitions',
        url: './competitions',
      },
      {
        name: 'Players list',
        url: './players'
      }
    ];
  }
}
