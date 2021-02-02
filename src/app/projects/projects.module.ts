import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddprojectComponent } from './addproject/addproject.component';
import { AddprojectdetailsComponent } from './addprojectdetails/addprojectdetails.component';
import { AddprojectdialogsComponent } from './addprojectdialogs/addprojectdialogs.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import {ProjectsRoutingModule} from './projects-routing.module'


@NgModule({
  declarations: [AddprojectComponent, AddprojectdetailsComponent, AddprojectdialogsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsRoutingModule,
  ]
})
export class ProjectsModule { }
