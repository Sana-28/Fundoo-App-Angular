
import { AppAdminComponent } from './appadmin.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminService } from './service/admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DatabaseComponent } from './component/database/database.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginService } from './service/login.service';
import { MapComponent } from './component/map/map.component';
import { MaterialModule } from '../appadmin/material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './component/timeline/timeline.component';
import { UserNoteService } from './service/usernote.service';

// import { AppRoutingModule } from '../appadmin/app-routing.module';

 
@NgModule({
  declarations: [
    AppAdminComponent,
    AdminComponent,
    DashboardComponent,
    DatabaseComponent,
    HomeComponent,
    MapComponent,
    TimelineComponent
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
                              { path:'timeline', component: TimelineComponent},
                              { path: 'database', component: DatabaseComponent}
                            ]
                          },
                          ]),
  ],

 entryComponents:[],

  providers: [AdminService,
                LoginService,
                  UserNoteService
               ],

  bootstrap: [AppAdminComponent]  
})
export class AdminModule { }
