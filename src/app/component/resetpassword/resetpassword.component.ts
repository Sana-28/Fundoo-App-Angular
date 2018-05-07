/**
*@description:This is reset password component contains a  method to call reset new password Api
* @author: SANA SHAIKh
* @since: 9/April/2018
*/

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  model:any={};
  constructor(private userServiceObj:UserService) { }

  ngOnInit() {
    console.log(window.location.search);
  }

  /**@method: This method is set new password */
  reset(){
    console.log(this.model);
    var u = 'resetnewpassword'+window.location.search;
    this.userServiceObj.postService(u,this.model)
                        .subscribe(data=>{
                          console.log(data)});
  }
}
