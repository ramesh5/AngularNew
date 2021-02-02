import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'projects', loadChildren: ()=>import('./projects/projects.module').then(map=>map.ProjectsModule)
  },
  {
    path:'epics',loadChildren: ()=>import('./epic/epic.module').then(map=>map.EpicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

