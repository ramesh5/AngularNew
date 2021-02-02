import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {AddprojectdialogsComponent} from '../addprojectdialogs/addprojectdialogs.component';
import {Addprojectservice} from 'src/app/Addproject.services';



@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {

  constructor(public projectservice:Addprojectservice,private dialog:MatDialog) { 
    debugger;
  }

  ngOnInit(): void {
    this.projectservice.fetchProjects()
    .subscribe((projects)=>{
    });
  }

  
  onAddProject(): void {
    debugger;
    const dialogRef: MatDialogRef<AddprojectdialogsComponent> = this.dialog.open(AddprojectdialogsComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(project => {
      project.title = project.title;
      project.startdate = project.startdate;
      project.enddate = project.enddate;
      this.projectservice.addProject(project);
    })
  }

}
