/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for trash contains 2 methods i.e. restore notes and delete notes forever
*/

import { Component, OnInit } from '@angular/core';
import { NotesResponse } from '../response/notesresponse';
import { UserService, NoteService } from '../service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  notes:NotesResponse[];
  constructor(private userservice: UserService , private noteServiceObj : NoteService) { }

  ngOnInit() {
    this.refreshNote();
  }

  refreshNote(): void {
    this.noteServiceObj.getNotes().subscribe(response => {
          this.notes = response;
          console.log("Notes fetched successfully..", response)
       });
};
  
restore(note): void{
  console.log("Restore notes from trash..",note);
  note.status=false;
    this.userservice.putService('updatenotes',note).subscribe(response=>{
      console.log("deleteNote  response",response);
       this.refreshNote();
  });
};

deleteForever(notes): void{
  console.log("noteId",notes);

    notes.noteId;
    this.noteServiceObj.deleteNotes(notes)
                          .subscribe(response=>{
                            console.log("Deleted Successfully..",response);
                              this.refreshNote();
  });
};
}
