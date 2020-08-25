import { Injectable } from '@angular/core';
import { IPromotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";
import { resolve } from 'url';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<IPromotion[]>{
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id:string): Observable<IPromotion>{
    return of(PROMOTIONS.filter((promo)=> (promo.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<IPromotion>{
    return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000));
  }
}
