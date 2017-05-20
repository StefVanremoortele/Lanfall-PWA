import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Player } from '../models/Player';

@Injectable()
export class PlayerSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<Player[]> {
    return this.http
      .get(`app/players?nickname=${term}`)
      .map((r: Response) => r.json().data as Player[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}
