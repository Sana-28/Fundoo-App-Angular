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

  //For Ngform only reset method is available
  resetForm(form?: NgForm) {

    if (form != null)
      form.reset;
    this.model = {
      email: '',
      password: ''
    }
  }

  //Login Api 
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

