import { Component, OnInit } from '@angular/core';
import { UserNoteResp } from '../../model/usernoteresp';
import { UserNoteService } from '../../service/usernote';

@Component({
  selector: 'dashboard-admin',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  usernotes : UserNoteResp[];

  constructor(private userNoteSerObj:UserNoteService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData():void{
    this.userNoteSerObj.getData()
                          .subscribe(response => {
                             this.usernotes = response;
                             //debugger;
                              console.log("Data fetched successfully",this.usernotes);
                            });
  }
}
