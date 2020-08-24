import { Component, OnInit } from '@angular/core';
import { IDish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { IPromotion } from "../shared/promotion";
import { PromotionService } from "../services/promotion.service";
import { LeaderService } from '../services/leader.service';
import { ILeader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: IDish;
  promotion: IPromotion;
  leader: ILeader;

  constructor(private dishService:DishService,
              private promotionService: PromotionService,
              private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .then((dish)=> this.dish = dish);
    this.promotionService.getFeaturedPromotion()
      .then((promotion)=>this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .then((leader)=> this.leader = leader );
  }

}
