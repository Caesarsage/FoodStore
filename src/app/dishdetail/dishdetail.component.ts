import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { IDish, IComment } from '../shared/dish';
import { DishService } from "../services/dish.service";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish:IDish;
  dishIds: string[];
  prev: string;
  next: string;

  dishcopy: IDish;
  errMessage: string;
  visibility = 'shown'

  commentsForm: FormGroup;
  commentI: IComment;
  @ViewChild('fform') commentsFormDirective;

  formErrors = {
    'author':'',
    'comment':''
  };

  validationMessages = {
    'author':{
      'required': 'author name is required.',
      'minlength': 'author name must be at least two character long.'
    },
    'comment': {
      'required':'comment is required.'
    }
  }

  constructor(private dishservice: DishService,
              private location: Location,
              private route:ActivatedRoute,
              private fb: FormBuilder,
              @Inject('BaseURL') private BaseURL) {this.createForm();}

  createForm(){
    this.commentsForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: [''],
      comment: ['', [Validators.required]]
    });

    this.commentsForm.valueChanges
      .subscribe(data=> this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any){
    if (!this.commentsForm) {
      return;
    }
    const form =  this.commentsForm;
    for (const field in this.formErrors){
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error message if any
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];
          for (const key in control.errors){
            if (control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  ngOnInit() {
    this.createForm();

    this.dishservice.getDishIds()
      .subscribe((dishIds) => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => {
      this.visibility = 'hidden';
      return this.dishservice.getDish(params['id']);
    }))
      .subscribe((dish)=> {
        this.dish = dish;
        this.dishcopy = dish;
        this.setPrevNext(dish.id);
        this.visibility = 'shown';

      },
      err => this.errMessage=<any>err
      );
  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]
  }

  goBack(): void{
    this.location.back();
  }

  onSubmit(){
    this.commentI = this.commentsForm.value;
    this.commentI.date = new Date().toISOString();
    this.dishcopy.comments.push(this.commentI);
    console.log(this.commentI);

    this.dishservice.putDish(this.dishcopy).subscribe(dish=>{
      this.dish = dish; this.dishcopy = dish
    },
    errmess => {
      this.dish = null,
      this.dishcopy = null,
      this.errMessage = errmess
    })
    this.commentsFormDirective.resetForm();
    this.commentsForm.reset({
      author: '',
      comment: ' ',
      rating: 5
    });
  }

}
