import { Injectable } from '@angular/core';
import { IDish } from "../shared/dish";
import { DISHES } from "../shared/dishes";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): IDish[]{
    return DISHES
  }

  getDish(id:string): IDish{
    return DISHES.filter((dish)=> (dish.id === id))[0];
  }

  getFeaturedDish(): IDish{
    return DISHES.filter((dish) => dish.featured)[0]
  }
}
