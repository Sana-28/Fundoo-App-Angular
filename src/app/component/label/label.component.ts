/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is label component contains method to fetch labels and create labels
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

import { LabelResponse } from '../../model/labelresponse';
import { NoteService, LabelService } from '../../service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  model : any = {};
  label : LabelResponse[];

  constructor(private noteServiceObj:NoteService,private labelServiceObj: LabelService , public dialogRef:MatDialogRef<LabelComponent>) { }

  ngOnInit() {
    this.refreshLabel();
  }

  /**@method: This method is to fetch labels */
  refreshLabel():void{
    this.labelServiceObj.getLabels()
                          .toPromise()
                            .then(response=>{
                              this.label=response;
                              console.log("Labels fetched successfully..");
                            })
  }

  /**@method:This method is to create labels */
  createLabel(): void {
    this.labelServiceObj.createLabel(this.model)
                      .subscribe(response => {
                          console.log("Label Created successfully..", response, this.label)
                           this.dialogRef.close();
                                             });
 };
}
