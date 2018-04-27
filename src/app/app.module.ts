import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';//defines route for differnt link
import { MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NoteListComponent } from './notes/note.list.component';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
import { ReminderComponent } from './reminder/reminder.component';
import { LabelComponent } from './label/label.component';
import { NotedisplayComponent } from './notedisplay/notedisplay.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';


import { UserService } from './service/user.service';
import { NoteService } from './service/note.service';
import { CollaboratorService } from './service/collaborator.service';

import { NoteFilterPipe } from './notefilter.pipe';

import { AuthGuard, LoginAuthGuard} from './guard/auth.guard';

const routes: Routes = [
  //{path:'register',component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CollaboratorComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    HomeComponent,
    ResetpasswordComponent,
    NoteListComponent,
    TrashComponent,
    ArchiveComponent,
    ReminderComponent,
    LabelComponent,

    NoteFilterPipe,

    NotedisplayComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    
  ],
 entryComponents:[LabelComponent,CollaboratorComponent],
  providers: [UserService, NoteService,CollaboratorService, AuthGuard, LoginAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
