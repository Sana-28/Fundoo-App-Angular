import { Injectable } from '@angular/core';
import { UserService } from "./user.service"
import { Observable } from 'rxjs/Observable';
import { NotesResponse } from '../response/notesresponse';

@Injectable()
export class NoteService {

  constructor(private userServiceObj : UserService ) { }

  getNotes () : Observable<NotesResponse[]>{
    return this.userServiceObj.getService('getnotes');
  }

  createNotes(note) :Observable<any>{
    return this.userServiceObj.putService('createnotes', note);
  }

  updateNotes(note):Observable<any>{
    return this.userServiceObj.putService('updatenotes',note);
  }

  deleteNotes(note): Observable<any>{
    return this.userServiceObj.deleteService('deletenotes',note);
  }
}
