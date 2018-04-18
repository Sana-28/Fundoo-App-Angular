/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for archieve contains a method to refresh notes
*/

import { Component, OnInit } from '@angular/core';
import { NotesResponse } from '../response/notesresponse';
import { UserService, NoteService } from '../service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

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
  
}
