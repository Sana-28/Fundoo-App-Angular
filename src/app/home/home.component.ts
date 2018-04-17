/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is home component which loads only after login
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model:any={};

  constructor() { }

  ngOnInit() {
  }

}
