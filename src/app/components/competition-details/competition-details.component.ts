import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from "../../services/competitions.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Http } from "@angular/http";
import { Competition } from "../../models/Competition";

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})
export class CompetitionDetailsComponent implements OnInit{

  public hasError: any;
  public loading: boolean;
  public competitions: Array<Competition>;

  constructor(private _competitionsService: CompetitionsService ) {}

  public ngOnInit(): void {
    this.fetchCompos();    
    console.log(this.competitions);
  }

  fetchCompos(){
    this.loading = true;
      this._competitionsService.getCompos().subscribe(
        (res) => {
          this.competitions = res;
          this.loading = false;
          this.hasError = false;
          console.log("Successfully fetched competitions");
          console.log(res)
        },
        () => {
          this.hasError = true;
          this.loading = false;        
          console.log("error fetching competitions");
        }
      );
      console.log(this.hasError);
  }

  showPrizePool(){
    
  }

}

