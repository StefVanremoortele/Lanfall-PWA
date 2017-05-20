import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Http } from "@angular/http";

import { Competition } from "../../../models/Competition";
import { CompetitionsService } from "../../../services/competitions.service";

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})
export class CompetitionDetailsComponent implements OnInit{

  public hasError: any;
  public loading: boolean;
  
  public error: any;
  public competition: Competition;
  public selectedCompetition: Competition;

  showNgFor = false;
  
  constructor(
    private route: ActivatedRoute,
    private competitionsService: CompetitionsService) {
    
  }

  public ngOnInit(): void {
    this.route.params
      // tslint:disable-next-line:no-string-literal
      .switchMap((params: Params) => this.competitionsService.getCompetition(+params["id"]))
      .subscribe((competition) => this.competition = competition);
  }


}

