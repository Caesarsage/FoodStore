import { Injectable } from '@angular/core';
import { IPromotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<IPromotion[]>{
    return this.http.get<IPromotion[]>(`${baseURL}promotions`).pipe(catchError(
      this.processHTTPMsgService.handleError
    ))
  }

  getPromotion(id:string): Observable<IPromotion>{
    return this.http.get<IPromotion>(`${baseURL}promotions/${id}`).pipe(catchError(
      this.processHTTPMsgService.handleError
    ))
  }

  getFeaturedPromotion(): Observable<IPromotion>{
    return this.http.get<IPromotion>(`${baseURL}promotions?featured=true`).pipe(
      map(promotions => promotions[0])
    ).pipe(catchError(
      this.processHTTPMsgService.handleError
    ))
  }
}
