import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs/operators';
import { Observable,of,forkJoin } from 'rxjs';
import {Project} from './Projects';

@Injectable({
    providedIn: 'root'
  })

  export class Addprojectservice{
    projects: Project[];

    url: string;
    epicurl:string;
    httpOption:object;
    
  
    constructor(private http: HttpClient, private snackBar: MatSnackBar) {
      this.projects = [];
      this.url = 'http://localhost:3000/Project';
      this.epicurl=" http://localhost:3000/epics";
    }

    fetchProjects():Observable<any>{      
    return this.http.get<Project[]>(this.url)
  .pipe(
    catchError((err:any):Observable<any>=>{    
        return of({}); 
      }),
      tap((obj:Project[])=>{
        this.projects=obj;
      })
  )
    }
   
    addProject(project: Project) {  
      debugger;    
        this.http.post<Project>(this.url, {
          title: project.title,
          startdate: project.startdate,
          enddate: project.enddate,
          epics:[]
        }, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        }).subscribe(project => {
          this.projects.push(project);
          this.fetchProjects().subscribe(res=>{
            
          });
          this.snackBar.open('Project Added successfully', '', {
            duration: 3000,
          });
          
        });
      }

      deleteProject(id:number){
        this.http.delete(`${this.url}/${id}`)
        .pipe(  catchError((err:any):Observable<any>=>{
          return of([])
        }
        
        )).subscribe((obj)=>{
        this.projects=this.projects.filter(s=>s.id!=id);
        })
      }

      saveEpic(obj:Project[]){
         const putCalls = obj.map(res => this.http.put<Project>(`${this.url}/${res.id}`, {
          id: res.id,
          title: res.title,
          startdate: res.startdate,
          enddate: res.enddate,
          epics: res.epics
        }, this.httpOption));
      
        forkJoin(putCalls).subscribe((results) => {
          debugger
          this.snackBar.open('Epics Added successfully', '', {
            duration: 3000,
          });
        });
      }
  }