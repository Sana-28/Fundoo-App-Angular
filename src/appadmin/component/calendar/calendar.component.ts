import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy,ViewChild,TemplateRef } from '@angular/core';
// import {
//   startOfDay,
//   endOfDay,
//   subDays,
//   addDays,
//   endOfMonth,
//   isSameDay,
//   isSameMonth,
//   addHours
// } from 'date-fns';
// import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import {
//   CalendarEvent,
//   CalendarEventAction,
//   CalendarEventTimesChangedEvent
// } from 'angular-calendar';


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
