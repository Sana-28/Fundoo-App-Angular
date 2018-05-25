

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminComponent } from './appadmin.component';
import { AdminComponent } from './component/admin/admin.component';
// import { MaterialModule } from './appadmin/appadminmaterial';
import { MaterialModule } from '../appadmin/material.module';

// import { AppRoutingModule } from '../appadmin/app-routing.module';

 
@NgModule({
  declarations: [
    AppAdminComponent,
    AdminComponent
    ],
  
  imports: [
    //AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([{ path:'admin', component:AdminComponent}]),
  ],

 entryComponents:[],

  providers: [],

  bootstrap: [AppAdminComponent]
})
export class AdminModule { }
