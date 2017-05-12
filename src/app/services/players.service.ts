import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { Player } from "../models/Player";

@Injectable()
export class PlayersService {

  constructor(private http: Http) {
  }

  getPlayers(): Observable<Player[]> {
    return this.http
      .get(`http://localhost:1336/players`, this.getRequestHeaders())
      .map(res=>res.json())
      .catch(err => Observable.throw(err));
  }
  

  public getRequestHeaders() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return new RequestOptions({headers: headers});
  }

}
