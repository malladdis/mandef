import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProgramComponent} from './program/program.component';
import {ProgramCategoryComponent} from './program-category/program-category.component';
import {AddProgramComponent} from './add-program/add-program.component';

const programRoutes: Routes = [
  {path: '', component: ProgramComponent},
  {path: 'add', component: AddProgramComponent},
  {path: 'add-category', component: ProgramCategoryComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(programRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProgramRoutingModule { }
