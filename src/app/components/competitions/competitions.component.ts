import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from "../../services/competitions.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Http } from "@angular/http";
import { Competition } from "../../models/Competition";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit{

  public hasError: any;
  public loading: boolean;
  
  public error: any;
  public competitions: Competition[];
  public selectedCompetition: Competition;

  showNgFor = false;
  
   constructor(
    private router: Router,
    private competitionsService: CompetitionsService) {
    
  }

  getCompetitions(): void {
    this.competitionsService
      .getCompetitions()
      .then(competitions => this.competitions = competitions)
      .catch(error => this.competitions = error);
  }


  ngOnInit(): void {
    this.getCompetitions();
  }

  onSelect(competition: Competition): void {
    this.selectedCompetition = competition;
  }

  gotoDetail(): void {
    this.router.navigate(['/competition', this.selectedCompetition.id]);
  }

}

