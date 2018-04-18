/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is login component contains login method  
*/

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

  model: any = {};

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  /**@method:This method is to set form fields to null */
  //For Ngform only reset method is available
  resetForm(form?: NgForm) {

    if (form != null)
      form.reset;
    this.model = {
      email: '',
      password: ''
    }
  }

  /**@method:This method is to call login APi */
  login(): void {
    console.log("loginForm", this.model);
    this.userservice.postService('login', this.model).subscribe(response =>
      {
      //console.log(response));
      if (response.status === 200) {
        console.log(response.headers.get("Authorization"));
        localStorage.setItem('Authorization', response.headers.get("Authorization"));
        this.router.navigate(['/home']);
          
        } else if (response.status !== 200) {
        alert(response.message);
      }
    });
  }
}

