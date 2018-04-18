/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is home component which loads only after login
*/

import { Component, OnInit } from '@angular/core';
import { UserService, NoteService } from '../service';
import { NotesResponse } from '../response/notesresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model:any={};
  notes: NotesResponse[];
  reminder='/assets/icons/remind.png';

  constructor(private userservice: UserService, private noteServiceObj: NoteService) { }

  ngOnInit() {
   this.refresh();
    }

  refresh(): void {
    this.noteServiceObj.getNotes()
                        .toPromise()
                          .then(response => {
                             this.notes = response;
                             console.log("Notes fetched successfully");
                                            });
  };

  notify():void{

  }

}
