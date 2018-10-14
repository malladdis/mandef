import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ProgrammesComponent} from './programmes/programmes.component';
import {ProjectsComponent} from './projects/projects.component';
import {MaterialModule} from '../material.module';
import {ProgrammesService} from './service/programmes.service';
import {ProjectsService} from './service/projects.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OutputReportComponent } from './projects/output-report/output-report.component';
import { OutcomeReportComponent } from './projects/outcome-report/outcome-report.component';
import { IndicatorReportComponent } from './projects/indicator-report/indicator-report.component';
import { ActivityReportComponent } from './projects/activity-report/activity-report.component';
import { ProjectService } from '../master-modules/project-module/project.service';
import { FormColumnsService } from '../custom-form/services/form-columns.service';
import { CalculationMethodService } from '../master-modules/project-module/detail-project/log-frame/indicator-tree/services/calculation-method.service';

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
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(reportRoute)
  ],
  declarations: [ProgrammesComponent, ProjectsComponent, OutputReportComponent, OutcomeReportComponent, IndicatorReportComponent, ActivityReportComponent],
  exports:[ OutputReportComponent, OutcomeReportComponent, IndicatorReportComponent, ActivityReportComponent,IndicatorReportComponent],
  providers: [ProgrammesService, ProjectService,FormColumnsService,CalculationMethodService]
})
export class ReportsModule {
}
