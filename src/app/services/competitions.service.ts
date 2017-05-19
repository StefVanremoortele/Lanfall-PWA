import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { Competition } from "../models/Competition";

@Injectable()
export class CompetitionsService {
  private competitionsUrl = "app/competitions";

  constructor(private http: Http) { }

  getCompetitions(): Promise<Array<Competition>> {
    return this.http
      .get(this.competitionsUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Competition[];
      })
      .catch(this.handleError);
  }

  getCompetition(id: number): Promise<Competition> {
    return this.getCompetitions()
      .then(competitions => competitions.find(competition => competition.id === id));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
