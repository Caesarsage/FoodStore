import { Component, Inject, OnInit } from '@angular/core';
import { IDish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { IPromotion } from "../shared/promotion";
import { PromotionService } from "../services/promotion.service";
import { LeaderService } from '../services/leader.service';
import { ILeader } from '../shared/leader';
import { expand, flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]' : 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  dish: IDish;
  promotion: IPromotion;
  leader: ILeader;

  disherrMess: string;
  promotionerrMess: string;
  leadererrMess: string;


  constructor(private dishService:DishService,
              private promotionService: PromotionService,
              private leaderService: LeaderService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
      errmess => this.disherrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion=>this.promotion = promotion,
        errmess => this.promotionerrMess = <any>errmess);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leadererrMess = <any>errmess );
  }

}
