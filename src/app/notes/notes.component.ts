import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  model:any={};

  constructor(private userservice:UserService) { }

  ngOnInit() {
  }

  createNote():void{
    console.log(this.model);
    this.userservice.postservice('createnotes',this.model).subscribe(data=>console.log(data));
  }
}
