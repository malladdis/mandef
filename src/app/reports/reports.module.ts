import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ProgrammesComponent} from './programmes/programmes.component';
import {ProjectsComponent} from './projects/projects.component';
import {MaterialModule} from '../material.module';
import {ProgrammesService} from './service/programmes.service';
import {ProjectsService} from './service/projects.service';

const reportRoute: Routes = [
  {
    path: 'programmes',
    component: ProgrammesComponent

  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(reportRoute)
  ],
  declarations: [ProgrammesComponent, ProjectsComponent],
  providers: [ProgrammesService, ProjectsService]
})
export class ReportsModule {
}
