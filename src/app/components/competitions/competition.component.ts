import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import { Router } from '@angular/router';
import { Competition } from '../../models/Competition';

@Component({
  selector: 'app-competitions',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  public hasError: any;
  public loading: boolean;
  public competitions: Array<any>;

  public constructor(
    private _competitionService: CompetitionService,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.loading = true;
    this._competitionService.getCompetitions()
      .then(competitions => this.competitions = competitions)
      .then(() => this.loading = false)
      .catch((error) => this.hasError = error);
  }

  gotoDetail(competition: Competition): void {
    const link = ['/competition', competition.id];
    this.router.navigate(link);
  }
}
