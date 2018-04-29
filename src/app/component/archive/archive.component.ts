/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for archieve contains a method to refresh notes
*/

import { Component, OnInit } from '@angular/core';
import { NoteResponse } from '../../model/noteresponse';
import { UserService, NoteService } from '../../service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  notes:NoteResponse[];
  isArchive:any={};

  constructor(private userservice: UserService , private noteServiceObj : NoteService) { }

  ngOnInit() {
    this.refreshNote();
  }

  /**@method:This method is to fetch notes */
  refreshNote(): void {
    this.noteServiceObj.getNotes().subscribe(response => {
          this.notes = response;
          console.log("Notes fetched successfully..", response)
       });
};

/**@method:This method is to unArchieve notes */
  unArchive(note):void{
  console.log("Unarchive note..",note);
            note.isArchive=false;
            this.noteServiceObj.updateNotes(note)
                                .subscribe(response=>{
                                   console.log(response);
                                     this.refreshNote();
                                });
};
  
}
