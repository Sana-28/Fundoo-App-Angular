import { Component, OnInit } from '@angular/core';
import { NotesResponse } from '../response/notesresponse';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  notes:NotesResponse[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getService('getnotes', this.notes)
    .subscribe(response => {
      this.notes=response;
      console.log("Notes fetched successfully..", response)
    });
  }

  refreshNote(): void {
    this.userservice.getService('getnotes',this.notes).subscribe(response => {
    this.notes = response;
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

deleteForever(noteId): void{
  console.log("noteId",noteId);

  noteId.note;
    this.userservice.deleteService('deletenotes',noteId).subscribe(response=>{
      console.log("deleteNote  response",response);
       this.refreshNote();
  });
};

}
