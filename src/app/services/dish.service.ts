import { Injectable } from '@angular/core';
import { IDish } from "../shared/dish";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes():Observable<IDish[]>{
    return this.http.get<IDish[]>(baseURL + 'dishes').pipe(catchError(
      this.processHTTPMsgService.handleError
    ))
  }

  getDish(id:string): Observable<IDish>{
    return this.http.get<IDish>(baseURL + 'dishes/' + id).pipe(
      catchError(this.processHTTPMsgService.handleError)
    )
  }

  getFeaturedDish(): Observable<IDish>{
    return this.http.get<IDish>(baseURL + 'dishes?featured=true').pipe(
      map(dishes => dishes[0])
    ).pipe(
      catchError(this.processHTTPMsgService.handleError)
    )
  }

  getDishIds():Observable<string[] | any> {
    return this.getDishes().pipe(
      map(dishes => dishes.map(dish => dish.id)
    )).pipe(
      catchError(error => error)
    )
  }

}
