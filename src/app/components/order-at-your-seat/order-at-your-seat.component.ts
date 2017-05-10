import { Component } from '@angular/core';
import {DrinksService} from "../../services/drinks.service";

@Component({
  selector: 'app-order-at-your-seat',
  templateUrl: './order-at-your-seat.component.html'
})
export class OrderAtYourSeatComponent {

  public foods: Array<any>;
  public hasError: any;
  public loading: boolean;

  constructor(private _drinksService: DrinksService) {
    
  }
  
  public ngOnInit() {
    this.loading = true;
    this._drinksService.getDrinks().subscribe(
      (res) => {
        this.foods = res;
        this.loading = false;
        this.hasError = false;
        console.log("successfully fetched drinks");
      },
      () => {
        this.hasError = true;
        this.loading = false;        
        console.log("error fetching drinks");
      }
    );
  }
}
