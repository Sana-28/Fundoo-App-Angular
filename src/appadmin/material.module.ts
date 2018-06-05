/**Purpose:This is material module contains all APIS's needed to implement different
 * modules i.e. registrationForm,loginForm,toolBar,navBar
 * 
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';


@NgModule(
    {
        imports:[
            AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAMuee18C3d68DzpyuB9QVh6LAYRcJ1VeM'
              }),
            ChartsModule,
            FormsModule,
            FlexLayoutModule,
            HttpClientModule,
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatCardModule, 
            MatDatepickerModule,
            MatNativeDateModule,
            MatFormFieldModule,
            MatIconModule,
            MatMenuModule,
            MatSidenavModule,
            MatDialogModule,
            MatSelectModule,
            MatChipsModule,
            MatCheckboxModule,
            MatProgressBarModule,
            MatTableModule,
            ReactiveFormsModule
        ],
            
        exports:[
            AgmCoreModule,
            ChartsModule,
            FlexLayoutModule,
            FormsModule,
            HttpClientModule,
            MatButtonModule,
            MatToolbarModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatIconModule,
            MatMenuModule,
            MatSidenavModule,
            MatDialogModule,
            MatSelectModule,
            MatChipsModule,
            MatCheckboxModule,
            MatTableModule,
            ReactiveFormsModule
        ],
    }
)

export class MaterialModule{}