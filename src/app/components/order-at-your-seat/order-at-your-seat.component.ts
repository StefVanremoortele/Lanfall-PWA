import { Component } from '@angular/core';
import {DrinksService} from "../../services/drinks.service";

@Component({
  selector: 'app-order-at-your-seat',
  templateUrl: './order-at-your-seat.component.html',
  styleUrls: ['./order-at-your-seat.component.scss']
})
export class OrderAtYourSeatComponent {

  public drinks: Array<any>;
  public hasError: any;
  public loading: boolean;

  constructor(private _drinksService: DrinksService) {
  }
  
  
  public ngOnInit() {
    this.loading = true;
    this._drinksService.getDrinks().subscribe(
      (res) => {
        this.drinks = res;
        this.loading = false;
        this.hasError = false;
        console.log("Successfully fetched drinks");
        console.log(res)
      },
      () => {
        this.hasError = true;
        this.loading = false;        
        console.log("error fetching drinks");
      }
    );
    console.log(this.hasError);
  }
}