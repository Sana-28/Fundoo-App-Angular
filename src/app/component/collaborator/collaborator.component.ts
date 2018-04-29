/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is collaborator component contains methods to add collaborator on notes
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
import { importType } from '@angular/compiler/src/output/output_ast';

import { CollaboratorResponse } from '../../model/collaboratorresponse';
import { CurrentUserResp } from '../../model/currentuserresp';
import { NoteResponse } from '../../model/noteresponse';

import { UserService } from '../../service/user.service';
import { CollaboratorService } from '../../service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {

  model:any = {};
  user : CurrentUserResp;
  note : NoteResponse;
  collaborator: CollaboratorResponse[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:NoteResponse, private userservice: UserService,private collaboratorServiceObj:CollaboratorService, public dialogRef:MatDialogRef<CollaboratorComponent>) { }

  ngOnInit() {
      this.userservice.getUser('getuser').subscribe(response =>{
      this.user=response;
    });
  }

  /**@method: This method is to add Collaborator*/
  addCollaborator():void{
    
    this.model.noteId=this.data.noteId;
    console.log(this.model);
 
  this.collaboratorServiceObj.createCollaborator(this.model)
                                  .subscribe(response=>{
                                    // this.data.noteId=response;
                                    console.log("Shared successfully..",response)
                                      this.dialogRef.close();
    });
}
}