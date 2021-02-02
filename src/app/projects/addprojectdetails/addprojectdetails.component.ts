import { Component, OnInit } from '@angular/core';
import {Addprojectservice} from 'src/app/Addproject.services';
import {Project} from 'src/app/Projects';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-addprojectdetails',
  templateUrl: './addprojectdetails.component.html',
  styleUrls: ['./addprojectdetails.component.scss']
})
export class AddprojectdetailsComponent implements OnInit {

  constructor(public addprojectservice:Addprojectservice,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.addprojectservice.fetchProjects();
  }

  
  OnDelete(id:number){
    debugger
    this.addprojectservice.deleteProject(id);
    this.snackBar.open("Project removed from the project list successfully!","",{
      duration:3000
    });
  }
  displayedColumns: string[] = ['title', 'startdate', 'enddate', 'Actions'];
}

