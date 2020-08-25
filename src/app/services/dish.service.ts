import { Injectable } from '@angular/core';
import { IDish } from "../shared/dish";
import { DISHES } from "../shared/dishes";
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes():Observable<IDish[]>{
    return of(DISHES).pipe(delay(2000))
  }

  getDish(id:string): Observable<IDish>{
    return of(DISHES.filter((dish)=> (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<IDish>{
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds():Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id));
  }
}
