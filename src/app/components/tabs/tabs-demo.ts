import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'tabs-demo',
  templateUrl: 'tabs-demo.html',
  styleUrls: ['tabs-demo.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TabsDemo {

  public hasError: any;
  public loading: boolean;

  constructor() {
  }
  
  
  public ngOnInit() {
    this.loading = true;
    
  }
}
