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

  model     : any = {};
  inTrash   : any = {};
  isArchive : any = {};
  isPin     : any = {};

  notes     : NotesResponse[]; //= [{noteId:0,title:"sample", description : "fdfsdf" }];
  
  pinSvg    ='/assets/icons/pin.svg';
  unpinSvg  ='/assets/icons/unpin.svg';
  colorSvg  ='/assets/icons/colorSvg';
  crossSvg  = '/assets/icons/cross.svg';

  colors = [{
    color: '#FF0000',
    path: '/assets/icons/Red.png'
  }, {
    color: '#fcff77',
    path: '/assets/icons/yellow.png'
  }, {
    color: '#80ff80',
    path: '/assets/icons/green.png'
  }, {
    color: '#9ee0ff',
    path: '/assets/icons/skyblue.png'
  }, {
    color: '#7daaf2',
    path: '/assets/icons/blue.png'
  }, {
    color: '#9966ff',
    path: '/assets/icons/purple.png'
  }, {
    color: '#ff99cc',
    path: '/assets/icons/pink.png'
  }
  ];

  constructor(private userservice: UserService, private noteServiceObj: NoteService) { }

  /**@method:This ngOnInit method loads all the notes at the time of initialization */
  ngOnInit() {
    this.refreshNote();
  }

  /**@method:This method is to create notes */
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

  /**@method:This method is to fetch notes */
  refreshNote(): void {
    this.noteServiceObj.getNotes()
                        .toPromise()
                          .then(response => {
                             this.notes = response;
                              console.log("Notes fetched successfully");
                                            });
  };
  
  /**@method:This method is to move the notes to trash
   * @param:note,status,field
   */
  update(note):void{
    this.noteServiceObj.updateNotes(note)
                        .subscribe(response => {
                            console.log(response);
                            this.refreshNote();});
  }

  updateNotes(note,status,field){

    if(field =='trash'){

        note.inTrash=status;
        this.update(note);
        console.log("Moved notes to trash..");
    }

    else if(field =='archive'){

        note.isArchive=status;
        this.update(note);
        console.log("Moved notes to archive...");
    }

    else if(field == 'pin'){

        note.isPin=status;
        this.update(note);
        console.log("Pin note..");
    }

    else if(field == 'pin'){

        note.isPin=status;
        this.update(note);
        console.log("Unpinned note..");
    }

    else if(field == 'color'){
     
        this.update(note);
        console.log("Set color");
      }
  };

/**@method:This method is to set reminder of notes
 * @param:note,field
 */
remind(note):void{
  this.noteServiceObj.updateNotes(note)
                      .subscribe(response=>{
                        console.log(response);
                        this.refreshNote();
                                            });
}

saveReminder(note,field){
 
  var today =new Date();

  if(field == 'today'){

      today.setHours(20);
      today.setMinutes(0);
      today.setMilliseconds(0);
      note.reminder= today;
      this.remind(note);
  }
  else if(field == 'tomorrow'){

      today.setDate(today.getDate()+1);
      today.setHours(8);
      today.setMinutes(0);
      today.setMilliseconds(0);
      note.reminder= today;
      this.remind(note);

  }else if(field == 'nextWeek'){

      today.setDate(today.getDate()+6);
      today.setHours(8);
      today.setMinutes(0);
      today.setMilliseconds(0);
      note.reminder=today;
      this.remind(note);
  }
  else if(field == 'pickDate'){

    today.setDate(today.getDate());
    today.setHours(8);
    today.setMinutes(0);
    today.setMilliseconds(0);
    note.reminder=today;
    this.remind(note);
  }

  else if (field == 'null') {
           
    note.reminder=null;
    this.remind(note);
}
}
};

