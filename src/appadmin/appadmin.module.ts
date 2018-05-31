
import { AppAdminComponent } from './appadmin.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminService } from './service/admin';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent }  from './component/calendar/calendar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { MaterialModule } from '../appadmin/material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNoteService } from './service/usernote';


// import { AppRoutingModule } from '../appadmin/app-routing.module';

 
@NgModule({
  declarations: [
    AppAdminComponent,
    AdminComponent,
    CalendarComponent,
    DashboardComponent,
    HomeComponent,
    MapComponent
    ],
  
  imports: [
    //AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(
                          [
                            { path: '', redirectTo: 'admin', pathMatch: 'full' },
                            { path:'admin', component:AdminComponent},
                            { path:'home', component: HomeComponent,
                            children:[
                              { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                              { path:'dashboard', component:DashboardComponent},
                              { path:'map', component: MapComponent},
                              // { path:'timeline'},
                              // { path:'database'},
                              { path:'calendar', component:CalendarComponent},
                            ]
                          },
                          ]),
  ],

 entryComponents:[],

  providers: [AdminService,
                UserNoteService
               ],

  bootstrap: [AppAdminComponent]  
})
export class AdminModule { }
