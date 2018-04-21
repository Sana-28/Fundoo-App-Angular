import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

import { Label } from '../response/labelresponse';
import { NoteService } from '../service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  model  : any = {};
  labels : Label[];

  constructor(private noteServiceObj:NoteService,public dialogRef:MatDialogRef<LabelComponent>) { }

  ngOnInit() {
  }

  /**@method:This method is to create labels */
    createLabel(): void {
    this.noteServiceObj.createLabel(this.model)
                      .subscribe(response => {
                          console.log("Label Created successfully..", response, this.labels)
                          this.dialogRef.close();
                                             });
 };
}
