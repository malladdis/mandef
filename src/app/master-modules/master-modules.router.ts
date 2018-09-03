import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
const masterModuleRoutes: Routes = [
  {path: 'program', loadChildren: '../master-modules/program-module/program.module#ProgramModule'},
  {path: 'project', loadChildren: '../master-modules/project-module/project.module#ProjectModule'},
  {path: 'budget', loadChildren: '../master-modules/budget-module/budget.module#BudgetModule'},
  {path: 'donors', loadChildren: '../master-modules/donor-module/donor.module#DonorModule'},
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
