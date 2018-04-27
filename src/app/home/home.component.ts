/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is home component which loads only after login
*/

import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";

import { UserService, NoteService } from '../service';
import { NotesResponse } from '../response/notesresponse';
import { LabelComponent } from '../label/label.component';
import { LabelResponse } from '../response/labelresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model:any={};
  notes: NotesResponse[];
  labels: LabelResponse[];
  reminder='/assets/icons/remind.png';

  constructor(private userservice: UserService, private noteServiceObj: NoteService, private dialog: MatDialog, private router : Router) { }

  ngOnInit() {
   this.refresh();
    this.refreshLabel();
      }

  refresh(): void {
    this.noteServiceObj.getNotes()
                        .toPromise()
                          .then(response => {
                             this.notes = response;
                             console.log("Notes fetched successfully");
                                            });
  };
  
  refreshLabel():void{
    this.noteServiceObj.getLabels()
                          .toPromise()
                            .then(response=>{
                              this.labels=response;
                              console.log("Labels fetched successfully..",this.labels);
                            })
  }

  logout() : void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  notify():void{

  };

  openLabelDialog(){
    this.dialog.open(LabelComponent, {
     
      width: '350px',
      height: '210px'
    });
  };

}
