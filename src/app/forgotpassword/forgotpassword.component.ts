import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  model:any={};
  constructor(private userservice:UserService) { }

  ngOnInit() {
  }

/* Forgotpassword Api*/
forgot():void
{
  console.log(this.model);
  this.userservice.postService('forgetpassword',this.model).subscribe(data=>console.log(data));
}
}
