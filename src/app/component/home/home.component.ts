/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is home component which loads only after login
*/

import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";

import { UserService, NoteService, LabelService } from '../../service';

import { UpdatelabelComponent } from '../updatelabel/updatelabel.component';
import { LabelComponent } from '../label/label.component';

import { NoteResponse } from '../../model/noteresponse';
import { LabelResponse } from '../../model/labelresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model:any={};
  notes: NoteResponse[];
  labels: LabelResponse[];
  reminder='/assets/icons/remind.png';

  constructor(private userservice: UserService, private noteServiceObj: NoteService, private labelServiceObj:LabelService, private dialog: MatDialog, private router : Router) { }

  ngOnInit() {
     this.refresh();
     this.refreshLabel();
      }

  /**@method: This is to refresh notes */
  refresh(): void {
    this.noteServiceObj.getNotes()
                        .toPromise()
                          .then(response => {
                             this.notes = response;
                              console.log("Notes fetched successfully");
                                            });
  };
  
  /**@method: This method is to fetch labels*/
  refreshLabel():void{
    this.labelServiceObj.getLabels()
                          .toPromise()
                            .then(response=>{
                              this.labels=response;
                               console.log("Labels fetched successfully..",this.labels);
                            })
  }

  /**@method: This method is for logout */
  logout() : void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  notify():void{

  };

  /**@method: This method is to open dialog for adding label */
  openLabelDialog(){
    this.dialog.open(LabelComponent, {
     
      width: '350px',
      height: '210px',
      data : {
        labels : this.labels
    }
    });
  };

  OpenLabelUpdateDialog(){
    this.dialog.open(UpdatelabelComponent, {
      data : {
        labels : this.labels
    },
      
      height: '210px',
      
    });
  };

}
