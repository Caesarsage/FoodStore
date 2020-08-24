import { Injectable } from '@angular/core';
import { IDish } from "../shared/dish";
import { DISHES } from "../shared/dishes";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<IDish[]>{
    return Promise.resolve(DISHES);
  }

  getDish(id:string): Promise<IDish>{
    return Promise.resolve(DISHES.filter((dish)=> (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<IDish>{
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
