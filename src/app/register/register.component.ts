import { Component, OnInit } from '@angular/core';
import{ FormBuilder} from '@angular/forms';
import { NgForm} from '@angular/forms';

import  { User} from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor() { 

  }

  ngOnInit() {
    this.resetForm();
    }

  resetForm(form? : NgForm){
    if(form!=null)
    form.reset();
    this.user={
      name:'',
      email:'',
      password:'',
      mobileNo:''
    }
  }
}
