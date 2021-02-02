import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Project} from 'src/app/Projects';
import {Addprojectservice} from 'src/app/Addproject.services';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-addprojectdialogs',
  templateUrl: './addprojectdialogs.component.html',
  styleUrls: ['./addprojectdialogs.component.scss']
})
export class AddprojectdialogsComponent implements OnInit {

  events: string[] = [];
  events1: string[] = [];
  project:Project;

  group:FormGroup;


  
  constructor(private dialogRef: MatDialogRef<AddprojectdialogsComponent>,public projectservice:Addprojectservice,private builder:FormBuilder,private http:HttpClient) { 
    this.project=new Project(null,null,null,null,null);
    this.group=this.builder.group({
      title:['',[Validators.required],this.projectExistsValidator.bind(this)],
      startdate:['',[Validators.required]],
      enddate:['',[Validators.required]]
    })
  }
  addEventStartdate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  addEventEnddate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events1.push(`${type}: ${event.value}`);
  }

  get title() {
    return this.group.get('title');
  }

  get startdate() {
    return this.group.get('startdate');
  }

  get enddate() {
    return this.group.get('enddate');
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave(): void {
      this.project.title =this.group.value.title;
      this.project.startdate = this.group.value.startdate;
      this.project.enddate = this.group.value.enddate;
      this.projectservice.addProject(this.project);
      this.dialogRef.close();
  }

  projectExistsValidator(control: AbstractControl): Observable<any|null> {
    const { value } = control;
    return this.http.get<any[]>(`http://localhost:3000/project?title=${value}`)
      .pipe(
        map(users => {
          if (users.length) {
            return {
              projectExists: true,
            }
          }
          return null;
        })
      );
  }

}
