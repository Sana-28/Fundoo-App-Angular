/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is Note Service contains method to create note,update note,delete note,get notes
*/
import { Injectable } from '@angular/core';
import { UserService } from "./user.service"
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NoteResponse } from '../model/noteresponse';


@Injectable()
export class NoteService {

  private NoteSubject=new Subject<any>();

  constructor(private userServiceObj : UserService ) { }

  /**@method: This method is to fetch notes */
  reloadNotes():void{
    var path = "getnotes";
    this.userServiceObj.getService(path)
                        .toPromise()
                          .then((res)=>{
                            this.NoteSubject.next(res);
                           });
   }

  /**@method: This method is to fetch notes */
  getNotes () : Observable<NoteResponse[]>{
    return this.userServiceObj.getService('getnotes');
  }

   /**@method: This method is to create notes */
  createNotes(note) :Observable<any>{
    return this.userServiceObj.putService('createnotes', note);
  }

   /**@method: This method is to update notes */
  updateNotes(note):Observable<any>{
    return this.userServiceObj.putService('updatenotes',note);
  }

   /**@method: This method is to delete notes */
  deleteNotes(note): Observable<any>{
    return this.userServiceObj.deleteService('deletenotes',note);
  }

  /**@method: This method is to upload image of notes */
  uploadImage(model):Observable<any>{
    console.log("Checking upload image in service", model)
    //return this.userServiceObj.putService('uploadNoteImage',model);
    return this.userServiceObj.imageUpload('uploadNoteImage',model);
  }

  deleteImage(model):Observable<any>{
    return this.userServiceObj.imageDelete('deleteImage',model);
  }
}
