import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";

@Component({
  selector: 'app-competitions',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  public hasError: any;
  public loading: boolean;
  public competitions: Array<any>;

  public constructor(private _competitionService: CompetitionService) {
  }

  public ngOnInit(): void {
    this.loading = true;
    this._competitionService.getCompetitions()
      .then(competitions => this.competitions = competitions)
      .then(() => this.loading = false)
      .catch((error) => this.hasError = error);
  }

}
