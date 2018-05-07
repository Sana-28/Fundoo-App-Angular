/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for trash contains 2 methods i.e. restore notes and delete notes forever
*/

import { Component, OnInit } from '@angular/core';
import { NoteResponse } from '../../model/noteresponse';
import { UserService, NoteService } from '../../service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  notes:NoteResponse[];
  inTrash: any = {};

  constructor(private userservice: UserService , private noteServiceObj : NoteService) { }

  ngOnInit() {
    this.refreshNote();
  }

   /**@method:This method is to fetch notes */
  refreshNote(): void {
    this.noteServiceObj.getNotes()
                        .subscribe(response => {
                            this.notes = response;
                              console.log("Notes fetched successfully..", response)
       });
};
  
/**
* @method:This method is to restore the deleted notes
* @param note
*/
restore(note): void{
  console.log("Restore notes from trash..",note);
            note.inTrash=false;
            this.noteServiceObj.updateNotes(note)
                                .subscribe(response=>{
                                   console.log(response);
                                     this.refreshNote();
                                });
};

/**
* @method:This method is to delete notes permanently
* @param note
*/
deleteForever(note): void{
  console.log("noteId",note);
                    this.noteServiceObj.deleteNotes(note)
                          .subscribe(response => {
                            console.log("Deleted Successfully..",response);
                              this.refreshNote();
  });
};

}
