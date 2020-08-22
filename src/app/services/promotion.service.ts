import { Injectable } from '@angular/core';
import { IPromotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): IPromotion[]{
    return PROMOTIONS
  }

  getPromotion(id:string): IPromotion{
    return PROMOTIONS.filter((promo)=> (promo.id === id))[0];
  }

  getFeaturedPromotion(): IPromotion{
    return PROMOTIONS.filter((promo) => promo.featured)[0]
  }
}
