import { Injectable } from '@angular/core';
import { ILeader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map , catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { baseURL } from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<ILeader[]>{
    return this.http.get<ILeader[]>(`${baseURL}leadership`).pipe(
      catchError(
      this.processHTTPMsgService.handleError
    ))
  }

  getLeader(id:string): Observable<ILeader>{
    return this.http.get<ILeader>(`${baseURL}leadership/${id}`).pipe(
      catchError(
      this.processHTTPMsgService.handleError
    ))
  }

  getFeaturedLeader(): Observable<ILeader>{
    return this.http.get<ILeader>(`${baseURL}leadership?featured=true`).pipe(
      map(leaders => leaders[0])).pipe(
      catchError(
      this.processHTTPMsgService.handleError
    ))
  }

}
