import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';


@NgModule(
    {
        imports:[
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            FlexLayoutModule,
            MatFormFieldModule],
        exports:[
            MatButtonModule,
            MatToolbarModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            FormsModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            ],
    }
)

export class MaterialModule{}