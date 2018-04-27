/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is collaborator component contains methods to add collaborator on notes
*/

import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { importType } from '@angular/compiler/src/output/output_ast';

import { CollaboratorResponse } from '../response/collaboratorresponse';
import { CurrentUserResp } from '../response/currentuserresp';
import { UserService } from '../service/user.service';
import { CollaboratorService } from '../service';
import { NotesResponse } from '../response/notesresponse';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {

  model:any = {};
  user : CurrentUserResp;
  note : NotesResponse;
  collaborator: CollaboratorResponse[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:NotesResponse, private userservice: UserService,private collaboratorServiceObj:CollaboratorService, public dialogRef:MatDialogRef<CollaboratorComponent>) { }

  ngOnInit() {
      this.userservice.getUser('getuser').subscribe(response =>{
      this.user=response;
    });
  }

  addCollaborator():void{

    this.model.noteId=this.note.noteId;
  
   /* this.collaboratorServiceObj.createCollaborator(this.model)
                                  .subscribe(response=>{
                                    console.log("Shared successfully..",response)
                                    this.dialogRef.close();
    });*/
  }
}
