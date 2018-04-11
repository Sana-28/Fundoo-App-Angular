/*****
 * @author Sana Shaikh
 * @since 9/04/2018
 * @description This is register component contains a method to register user.
 */
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any={};
  constructor(private userservice:UserService) { 
  }

/*****
 * @method resetForm
 * @argument {form?:}
 * @description This method is used to reset form fields to null
 */
  ngOnInit() {
    this.resetForm();
    }

  resetForm(form? : NgForm){
    if(form!=null)
    form.reset();
    this.model={
      name:'',
      email:'',
      password:'',
      mobileNo:''
    }
  }

  /*Register Api */
  register():void{
    console.log(this.model);
    this.userservice.postservice('register',this.model).subscribe(data=>console.log(data));
  }
}
