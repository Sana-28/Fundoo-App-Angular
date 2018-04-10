import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import  { User} from '../models/user.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  model:any={};
  constructor(private registerservice:RegisterService) { 
  }

  ngOnInit() {
    //this.resetForm();
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
  /**Register Api */
  register():void{
    console.log(this.model);
    this.registerservice.register('register',this.model).subscribe(data=>console.log(data));
  }
}
