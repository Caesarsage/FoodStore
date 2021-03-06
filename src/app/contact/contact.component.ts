import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { expand, flyInOut } from '../animations/app.animations';
import { FeedbackService } from '../services/feedback.service';
import { IFeedback, ConctactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]' : 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: IFeedback;

  errMessage: string;
  feedbackCopy:IFeedback;
  loading: Boolean = false;

  contactType = ConctactType;
  @ViewChild('fform') feedbackFormDirective; // to ensure the form is completely reset

  formErrors = {
    'firstname':'',
    'lastname':'',
    'telnum':'',
    'email':''
  };

  validationMessages = {
    'firstname': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least two character long.',
      'maxlength': 'First name cannot be more than 25 characters.'
    },
    'lastname': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least two character long.',
      'maxlength': 'Last name cannot be more than 25 characters.'
    },
    'telnum': {
      'required': 'Telnum name is required.',
      'pattern': 'Telnum must contain only numbers.'
    },
    'email':{
      'required': 'Last name is required.',
      'email': 'Email not in valid format.'
    }
  };

  constructor(private fb: FormBuilder, @Inject('BaseURL') private BaseURL, private feedbackService: FeedbackService){
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required,Validators.minLength(2) ,Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data=> this.onValueChanged(data));

    this.onValueChanged(); //reset form validation messages
  }

  onValueChanged(data?: any){
    if (!this.feedbackForm) {
      return;
    }
    const form =  this.feedbackForm;
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

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackCopy =this.feedbackForm.value;
    this.feedbackService.submitFeedback(this.feedbackCopy).subscribe(
      newfeedback => {
        setTimeout(() =>{
          this.feedbackCopy = newfeedback;
          this.feedback = newfeedback;
          this.loading =false;
          setTimeout(
            ()=> this.feedback = null,
           5000)
        },2000);
      },
      errmess =>{
        this.feedback =null,
        this.feedbackCopy = null,
        this.errMessage = <any>errmess
      }
    );
    this.feedbackForm.reset({
      firstname: '',
      lastname: ' ',
      telnum: 0,
      email:'',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}
