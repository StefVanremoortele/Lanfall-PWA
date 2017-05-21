import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { Player } from "../models/Player";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class PlayersService {

  private playerUrl = "app/players";

  constructor(private http: Http) { }

  getPlayers(): Promise<Array<Player>> {
    return this.http
      .get(this.playerUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Player[];
      })
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id));
  }

  search(term: string): Observable<Player[]> {
    return this.http
      .get(`app/players?nickname=${term}`)
      .map((r: Response) => r.json().data as Player[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }

  save(player: Player): Promise<Player> {
    if (player.id) {
      return this.put(player);
    }
    return this.post(player);
  }

  delete(player: Player): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.playerUrl}/${player.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Player
  private post(player: Player): Promise<Player> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.playerUrl, JSON.stringify(player), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Player
  private put(player: Player): Promise<Player> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.playerUrl}/${player.id}`;

    return this.http
      .put(url, JSON.stringify(player), { headers: headers })
      .toPromise()
      .then(() => player)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
