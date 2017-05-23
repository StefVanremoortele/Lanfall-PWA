import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Player} from "../models/Player";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const URL = "http://178.117.24.148:1337/players";

@Injectable()
export class PlayerService {

  constructor(private http: Http) {
  }

  getPlayers(): Promise<Array<Player>> {
    return this.http
      .get(URL)
      .toPromise()
      .then((response) => {
        return response.json() as Player[];
      })
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id));
  }
  
  search(nickname: string): Observable<Player[]> {
    return this.http
      .get(`http://178.117.24.148:1337/players?nickname_like=${nickname}`)
      .map((r: Response) => r.json() as Player[])
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

    const url = URL+`?id=${player.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }
  private post(player: Player): Promise<Player> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post( URL, JSON.stringify(player), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private put(player: Player): Promise<Player> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = URL+`?id=${player.id}`;

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
