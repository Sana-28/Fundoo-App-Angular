import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';

import { NoteResponse } from '../../model/noteresponse';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  model:any = {};
  note : NoteResponse;

  constructor(@Inject(MAT_DIALOG_DATA) public data:NoteResponse) { }

  ngOnInit() {
    document.getElementById('updateNoteTitle').innerHTML=this.data.title;
    document.getElementById('updateNoteDescription').innerHTML=this.data.description;
  }

  updateNote(){

  }

}
