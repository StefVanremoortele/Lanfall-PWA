import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { CompetitionService } from "../../../services/competition.service";
import {Competition} from "../../../models/Competition";

@Component({
  selector: 'app-competition-detail-component',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss']
})
export class CompetitionDetailComponent implements OnInit {
  
  @Input() competition: Competition;
  @Output() close = new EventEmitter();

  public hasError:any;
  public loading: boolean;
  public navigated = false; // true if navigated here

  public constructor(private competitionService: CompetitionService, private route: ActivatedRoute,) {
  }

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.competitionService.getCompetition(id)
            .then(competition => this.competition = competition)
            .then(() => this.loading = false)
            .catch((error) => this.hasError = error);;
      } else {
        this.navigated = false;
        this.competition = new Competition();
        this.loading = false;
        this.hasError = true;
      }
    });
  }

  goBack(): void {
    if (this.navigated) { window.history.back(); }
  }
}
