import { Injectable } from '@angular/core';
import { IDish } from "../shared/dish";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient) { }

  getDishes():Observable<IDish[]>{
    return this.http.get<IDish[]>(baseURL + 'dishes');
  }

  getDish(id:string): Observable<IDish>{
    return this.http.get<IDish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<IDish>{
    return this.http.get<IDish>(baseURL + 'dishes?featured=true').pipe(
      map(dishes => dishes[0])
    );
  }

  getDishIds():Observable<string[] | any> {
    return this.getDishes().pipe(
      map(dishes => dishes.map(dish => dish.id)
    ));
  }

}
