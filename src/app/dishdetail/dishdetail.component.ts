import { Component, OnInit, Input } from '@angular/core';
import { IDish } from '../shared/dish';
import { DishService } from "../services/dish.service";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish:IDish;

  constructor(private dishservice: DishService,
              private location: Location,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void{
    this.location.back();
  }

}
