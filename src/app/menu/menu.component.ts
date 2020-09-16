import { Component, Inject, OnInit } from '@angular/core';
import { IDish } from "../shared/dish";
import { DishService } from "../services/dish.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes:IDish[];
  errMess: string;

  constructor(private dishService: DishService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe( (dishes)=> this.dishes = dishes,
      errmess => this.errMess = <any>errmess)
  }

}

