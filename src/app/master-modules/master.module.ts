import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgramComponent} from './program-module/program/program.component';
import {ProjectComponent} from './project-module/project/project.component';
import {InputComponent} from './input/input.component';
import {OutputComponent} from './output/output.component';
import {OutcomeComponent} from './outcome/outcome.component';
import {MasterModulesRouter} from './master-modules.router';
import {ActivityComponent} from './activity/activity.component';
import {AddActivityComponent} from './activity/add-activity/add-activity.component';
import {MaterialModule} from '../material.module';
import {ProgramService} from './program-module/program/program.service';
import {ProgramModule} from './program-module/program.module';
import {ProjectService} from './project-module/project.service';

@NgModule({
  declarations: [
    InputComponent,
    OutputComponent,
    OutcomeComponent,
    ActivityComponent,
    AddActivityComponent
  ],
  imports: [
    CommonModule,
    MasterModulesRouter
  ],
  exports: [
    InputComponent,
    OutputComponent,
    OutcomeComponent,
    ActivityComponent,
    AddActivityComponent
  ],
  providers: [ProgramService, ProjectService]
})
export class MasterModule { }
