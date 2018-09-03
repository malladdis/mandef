import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterModulesRouter} from './master-modules.router';
import {ProgramService} from './program-module/program/program.service';
import {ProjectService} from './project-module/project.service';
import {DonorService} from './donor-module/donor.service';
import {BudgetService} from './budget-module/budget.service';

@NgModule({
  imports: [
    CommonModule,
    MasterModulesRouter
  ],
  providers: [ProgramService, ProjectService, DonorService, BudgetService]
})
export class MasterModule { }
