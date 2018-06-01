
import { AppAdminComponent } from './appadmin.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminService } from './service/admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent }  from './component/calendar/calendar.component';
// import { ChartsModule } from 'ng-charts';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GraphService } from './service/graph.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { MaterialModule } from '../appadmin/material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './component/timeline/timeline.component';
import { UserNoteService } from './service/usernote.service';
import { ChartsModule } from 'ng2-charts';


// import { AppRoutingModule } from '../appadmin/app-routing.module';

 
@NgModule({
  declarations: [
    AppAdminComponent,
    AdminComponent,
    CalendarComponent,
    DashboardComponent,
    HomeComponent,
    MapComponent,
    TimelineComponent
      ],
  
  imports: [
    //AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
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
                              { path:'timeline', component: TimelineComponent},
                              { path:'calendar', component:CalendarComponent},
                            ]
                          },
                          ]),
  ],

 entryComponents:[],

  providers: [AdminService,
                GraphService,
                  UserNoteService
               ],

  bootstrap: [AppAdminComponent]  
})
export class AdminModule { }
