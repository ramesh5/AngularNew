import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpicsComponent } from './epics/epics.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from "@angular/material/icon";
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {EpicRoutingModule} from './epic-routing.module'

@NgModule({
  declarations: [EpicsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    EpicRoutingModule,
  ]
})
export class EpicModule { }

