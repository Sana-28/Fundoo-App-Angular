import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { AdminResp } from '../../model/adminresp';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  model : any = {};
  adminresp : AdminResp[];
  constructor(private loginServiceObj: LoginService) { }

  ngOnInit() {
  }

  /**@method:This method is to call login APi */
  login(): void {
    //debugger;
    console.log("loginForm", this.model);
    this.loginServiceObj.login(this.model)
                          .subscribe(response =>              
                          {
                            console.log("loginSuccess..");
                        });
  }
}
