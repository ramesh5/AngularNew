import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray,Validator } from '@angular/forms';
import {Addprojectservice} from 'src/app/Addproject.services';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.scss']
})
export class EpicsComponent implements OnInit {
  epic:any;
  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }
  constructor(public proService:Addprojectservice,private builder: FormBuilder,) { 
    // this.addEpics.fetchProjects();
    this.epic=[];
    
  }

  
  ngOnInit(): void {
    debugger
    this.proService.fetchProjects().
    subscribe((projects)=>{
     // this.createEpic();
  }
    );

}
createEpic():void{
  this.proService.projects.forEach((proj,i)=>{
    const obj={
      id:proj.id,
      title:proj.title,
      epic:[{
        name:"",
        priority:""
      }]
    }
proj.epics.push(obj);
debugger
  })
}
onAddEpic(id:number): void {
  this.proService.projects.forEach((element,i) => {
    if(element.id==id){
      element.epics.push({
        name:"",
        priority:""
      })
    }
  });
   }
   
   
   onDeleteEpic(index: number,proId:number): void {
    this.proService.projects.forEach((element,i )=> {
      if(element.id==proId){
        debugger
        element.epics.splice(index,1);
      }
    });
  }

  onSave(){
    this.proService.projects.forEach((p,i)=>{
      p.epics.forEach((epic,j)=>{
       if(epic["name"]=="") 
       this.proService.projects[i].epics.splice(j,1);
       else
       epic["isSave"]="Yes";
      })
   })
   this.proService.saveEpic(this.proService.projects);
 }
}
