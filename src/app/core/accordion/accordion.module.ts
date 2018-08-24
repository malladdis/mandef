import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import {MaterialModule} from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule { }
