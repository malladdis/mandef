import {RouterModule, Routes} from '@angular/router';
import {ProgramComponent} from './program-module/program/program.component';
import {NgModule} from '@angular/core';
import {ProjectComponent} from './project-module/project/project.component';
import {OutputComponent} from './output/output.component';
import {InputComponent} from './input/input.component';
import {OutcomeComponent} from './outcome/outcome.component';
import {ActivityComponent} from './activity/activity.component';
import {AddActivityComponent} from './activity/add-activity/add-activity.component';
import {AfterLoginService} from '../services/after-login.service';

const masterModuleRoutes: Routes = [
  {path: 'program', loadChildren: '../master-modules/program-module/program.module#ProgramModule'},
  {path: 'project', loadChildren: '../master-modules/project-module/project.module#ProjectModule'},
  {path: 'output', component: OutputComponent},
  {path: 'input', component: InputComponent},
  {path: 'outcome', component: OutcomeComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'add-activity', component: AddActivityComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(masterModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MasterModulesRouter {}
