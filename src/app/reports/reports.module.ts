import { routes } from '../guarded-routes/guarded-routes.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammesComponent } from './programmes/programmes.component';
import { ProjectsComponent } from './projects/projects.component';
import { MaterialModule } from '../material.module';
import { ProjectService } from '../master-modules/project-module/project.service';
import { providers } from 'ng2-dnd';
import { ProgrammesService } from './service/programmes.service';
import { ProjectsService } from './service/projects.service';
const reportRoute:Routes=[
  {
    path:'programmes',
    component:ProgrammesComponent

  },
  {
    path:'projects',
    component:ProjectsComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(reportRoute)
  ],
  declarations: [ProgrammesComponent, ProjectsComponent],
  providers:[ProgrammesService,ProjectsService]
})
export class ReportsModule { }
