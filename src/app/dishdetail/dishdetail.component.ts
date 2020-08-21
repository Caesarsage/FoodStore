import { Component, OnInit } from '@angular/core';

const DISH = {
    id: 0,
    name:'Uthappizza',
    image: 'assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label:'Hot',
    price:'4.99',
    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    conments: [
        {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in confusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z",
        },
        {
            id: 1,
            rating: 4,
            comment: "Send anyone to heaven, I wish i could get my mother-in-law to eat it!",
            author: "Paul Lemon",
            date: "2014-10-05T17:57:28.556094Z",
        },
        {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "John micheal",
            date: "2015-10-13T17:57:28.556094Z",
        },
        {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Story",
            date: "2013-12-16T17:57:28.556094Z",
        },
        {
            id: 4,
            rating: 2,
            comment: "It your birthday, we are gona party!",
            author: "25 cent",
            date: "2011-12-16T17:57:28.556094Z",
        }
      ]
    };
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish = DISH
  constructor() { }

  ngOnInit() {
  }

}
