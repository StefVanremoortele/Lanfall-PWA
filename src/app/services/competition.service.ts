import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const URL = "http://178.117.24.148:1337/competitions";

@Injectable()
export class CompetitionService {

  constructor(private http: Http) {
  }

  getCompetitions(): Promise<Array<any>> {
    return this.http
      .get(URL)
      .toPromise()
      .then((response) => {
        return response = response.json();
      })
      .catch(this.handleError);
  }

  getCompetition(id: number): Promise<any> {
    return this.getCompetitions()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
