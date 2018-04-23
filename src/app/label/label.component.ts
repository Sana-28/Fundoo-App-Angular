import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

import { LabelResponse } from '../response/labelresponse';

import { NoteService } from '../service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  model : any = {};
  label : LabelResponse[];

  constructor(private noteServiceObj:NoteService,public dialogRef:MatDialogRef<LabelComponent>) { }

  ngOnInit() {
    this.refreshLabel();
  }

  refreshLabel():void{
    this.noteServiceObj.getLabels()
                          .toPromise()
                            .then(response=>{
                              this.label=response;
                              console.log("Labels fetched successfully..");
                            })
  }

  /**@method:This method is to create labels */
  createLabel(): void {
    this.noteServiceObj.createLabel(this.model)
                      .subscribe(response => {
                          console.log("Label Created successfully..", response, this.label)
                           this.dialogRef.close();
                                             });
 };
}
