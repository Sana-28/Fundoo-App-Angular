import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any={};
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  //For Ngform only reset method is available
  resetForm(form ?:NgForm){

    if(form!=null)
    form.reset;
    this.model={
      email:'',
      password:''
    }
  }

  /*Login Api */
  login():boolean{
    console.log("loginForm",this.model);
    
    if (this.userservice.postservice('login',this.model).subscribe(data=>console.log(data))) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
