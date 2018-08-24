import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgramRoutingModule} from './program-routing.module';
import {ProgramComponent} from './program/program.component';
import {ProgramCategoryComponent} from './program-category/program-category.component';
import {ProgramService} from './program/program.service';
import {MaterialModule} from '../../material.module';
import {AddProgramComponent} from './add-program/add-program.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProgramComponent,
    AddProgramComponent,
    ProgramCategoryComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    ProgramComponent,
    AddProgramComponent,
    ProgramCategoryComponent
  ],
  providers: []
})
export class ProgramModule { }
