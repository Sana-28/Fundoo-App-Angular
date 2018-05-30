import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar-admin',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  model: any = {};
  constructor() { }

  ngOnInit() {
  }

}
