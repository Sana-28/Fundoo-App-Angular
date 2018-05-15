/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is home component which loads only after login
*/

import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms'

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
  
  searchForm: FormGroup;
  inputFormControl: FormControl;

  constructor(private userservice: UserService,
                private noteServiceObj: NoteService, 
                  private labelServiceObj:LabelService,
                   private dialog: MatDialog,
                    private router : Router,
                     private builder: FormBuilder) 
                     { 
                        this.inputFormControl = new FormControl();
                        this.searchForm = this.builder.group({
                         inputFormControl: this.inputFormControl
                        }); 
                     }

  ngOnInit() {
     //this.refresh();
     //this.labelServiceObj.getlabel();
     this.searchText();
     this.readLabel();
      }

  /**@method: This is to refresh notes */
  refresh(): void {
    // this.noteServiceObj.getNotes()
    //                     .toPromise()
    //                       .then(response => {
    //                          this.notes = response;
    //                           console.log("Notes fetched successfully");
    //                                         });
  };
  
  /**@method: This method is to fetch labels*/
  readLabel():void{
    this.labelServiceObj.getlabels()
                          .subscribe(response=>{
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

  viewlist(){
    this.noteServiceObj.changeView();
  }

  searchText(){
    console.log("Test for search",this.inputFormControl);
    this.searchForm.valueChanges.subscribe(
      (formData) => {
        debugger;
        console.log("search",formData.inputFormControl);
        this.userservice.searchData(formData.inputFormControl);
      });
  }
}
