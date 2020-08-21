import { Component, OnInit } from '@angular/core';
import { IDish } from "../shared/dish";
import { DISHES } from "../shared/dishes";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes:IDish[] = DISHES;

  selectedDish = IDish;
  constructor() { }

  ngOnInit() {
  }

  onSelect(dish) {
    this.selectedDish = dish;
  }

}

