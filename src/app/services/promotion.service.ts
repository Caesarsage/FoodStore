import { Injectable } from '@angular/core';
import { IPromotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<IPromotion[]>{
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id:string): Promise<IPromotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=> (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Promise<IPromotion>{
    return Promise.resolve(PROMOTIONS.filter((promo) => promo.featured)[0]);
  }
}
