/**Purpose:This is routing module contains path of every component to be routed
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NotesComponent } from './notes/notes.component';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'createnotes', pathMatch: 'full' },
      { path: 'createnotes', component: NotesComponent },
      { path: 'trash', component:TrashComponent },
      { path: 'archieve',component:ArchiveComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent }
  // { path: 'createnotes', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
