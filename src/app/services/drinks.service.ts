import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DrinksService {

  constructor(private http: Http) {
  }

  getDrinks(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/food`, this.getRequestHeaders())
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
