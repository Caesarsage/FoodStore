import { Injectable } from '@angular/core';
import { IDish } from "../shared/dish";
import { DISHES } from "../shared/dishes";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<IDish[]>{
    return new Promise(
      resolve => {
        //simulate server latency with 2 sec delay
        setTimeout(()=> resolve(DISHES), 2000)
      }
    );
  }

  getDish(id:string): Promise<IDish>{
    return new Promise(
      resolve =>{
        setTimeout(() => resolve(DISHES.filter((dish)=> (dish.id === id))[0]), 2000);
      })
  }

  getFeaturedDish(): Promise<IDish>{
    return new Promise(
      resolve =>{
      //simulate server latency with 2 sec delay
      setTimeout(()=> resolve(DISHES.filter((dish) => dish.featured)[0]),2000);
    })
  }
}
