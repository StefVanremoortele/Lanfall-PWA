import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { Competition } from "../models/Competition";

@Injectable()
export class CompetitionsService {
    
  private playerurl = "http://178.117.24.148:1336/players";

  constructor(private http: Http) {

  }

  getCompos(): Observable<Competition[]> {
    return this.http.get(`http://178.117.24.148:1336/competitions`, this.getRequestHeaders())
      .map(res=>res.json())
      .catch(this.handleError);
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
