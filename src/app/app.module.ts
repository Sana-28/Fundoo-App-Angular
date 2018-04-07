import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  //{path:'register',component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
