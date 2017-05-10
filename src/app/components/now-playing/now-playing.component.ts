import { Component } from '@angular/core';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html'
})
export class NowPlayingComponent {

  public hasError: any;
  public loading: boolean;

  constructor() {
    
  }
  
}
