/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is home component which loads only after login
*/

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";

import { UserService, NoteService } from '../service';
import { NotesResponse } from '../response/notesresponse';
import { LabelComponent } from '../label/label.component';
import { Label } from '../response/labelresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model:any={};
  notes: NotesResponse[];
  label: Label[];
  reminder='/assets/icons/remind.png';

  constructor(private userservice: UserService, private noteServiceObj: NoteService, private dialog: MatDialog) { }

  ngOnInit() {
   this.refresh();
    }

  refresh(): void {
    this.noteServiceObj.getNotes()
                        .toPromise()
                          .then(response => {
                             this.notes = response;
                             console.log("Notes fetched successfully");
                                            });
  };

  notify():void{

  };

  openLabel(){
    this.dialog.open(LabelComponent, {
     
      width: '500px',
      height: '210px'
    });
  };

}
