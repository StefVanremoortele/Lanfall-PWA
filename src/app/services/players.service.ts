import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { Player } from "../models/Player";

@Injectable()
export class PlayersService {
    
  private playerurl = "http://178.117.24.148:1336/players";

  constructor(private http: Http) {

  }

  getPlayer(id: number): Observable<Player> {
    const url = `${this.playerurl}/${id}`;
    return this.http.get(url)
      .map(res=>res.json())
      .catch(this.handleError);
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get(`http://178.117.24.148:1336/players`, this.getRequestHeaders())
      .map(res=>res.json())
      .catch(this.handleError);
  }

  search(term: string): Observable<Player[]> {
    return this.http
      .get(`http://178.117.24.148:1336/players?firstname=${term}`)
      .map((response) => response.json().data as Player[]);
  }
  
  

  public getRequestHeaders() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return new RequestOptions({headers: headers});
  }

  private handleError(error: any): Promise<any> {
    console.error("error:", error);
    return Promise.reject(error.message || error);
  }
}
