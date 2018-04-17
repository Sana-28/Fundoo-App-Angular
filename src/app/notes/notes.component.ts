/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is notes component contains methods to create and update notes
*/

import { Component, OnInit, Input } from '@angular/core';
import { UserService, NoteService } from '../service';
import { environment } from '../../environments/environment';
import { NotesResponse } from '../response/notesresponse';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  model: any = {};
  notes: NotesResponse[]; //= [{noteId:0,title:"sample", description : "fdfsdf" }];
  inTrash: any = {};
  isArchive:any ={};
  isPin: any={};

  //@Input
  constructor(private userservice: UserService, private noteServiceObj: NoteService) { }

  /**This ngOnInit method loads all the notes at the time of initialization */
  ngOnInit() {
    this.refreshNote();
  }

  /**This method is to create notes */
  createNote(): void {
    this.noteServiceObj.createNotes(this.model)
                      .subscribe(response => {
                          console.log("Note Created successfully..", response, this.notes);
                                             });

    /*   let self = this;
        this.noteServiceObj.createNotes(this.model).subscribe(function(response){
          console.log("Note Created successfully..", response, self.notes,this.notes);
        });
    */
  };

  refreshNote(): void {
    this.noteServiceObj.getNotes()
                        .toPromise()
                          .then(response => {
                             this.notes = response;
                             console.log("Notes fetched successfully");
                                            });
  };
  
  /**This method is to move the notes to trash */
  updateNotes(note,status,field){
    console.log("in method");
   if(field =='trash'){
      note.inTrash=status;
      this.noteServiceObj.updateNotes(note)
                          .subscribe(response => {
                            console.log(response,"Moved notes to trash..");
                             this.refreshNote();});
    }
    else if(field =='archive'){
      note.isArchive=status;
      this.noteServiceObj.updateNotes(note)
                            .subscribe(response => {
                                console.log(response,"Moved notes to archive...");
                                   this.refreshNote();});
    }
  }
};

