import { Component, OnInit,Input } from '@angular/core';
import { NotesResponse} from '../response/notesresponse';
import { UserService, NoteService } from '../service';

@Component({
  selector: 'app-notedisplay',
  templateUrl: './notedisplay.component.html',
  styleUrls: ['./notedisplay.component.css']
})
export class NotedisplayComponent implements OnInit {

  @Input() note : any;
  
  ngOnInit(){

  }
};