import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from './project/project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectCategoryComponent} from './project-category/project-category.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material';
import {DetailProjectComponent} from './detail-project/detail-project.component';
import {ProjectService} from './project.service';
import { ClusterComponent } from './cluster/cluster.component';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import {DetailModule} from './detail-project/detail/detail.module';
import { EditIndicatorDialogComponent } from './detail-project/log-frame/indicator-tree/edit-indicator-dialog/edit-indicator-dialog.component';
import { CustomFormsService } from '../../custom-form/custom-forms.service';
import { FormColumnsService } from '../../custom-form/services/form-columns.service';
import { AnnualTableComponent } from './detail-project/data-entry/annual-table/annual-table.component';
import { DataEntryDialogComponent } from './detail-project/data-entry/data-entry-dialog/data-entry-dialog.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_n7J4QTEgv89AWttZDKYf7ALt41MLYrQ'
    }),
    PerfectScrollbarModule,
    DetailModule
  ],
  declarations: [
    ProjectComponent,
    ProjectCategoryComponent,
    AddProjectComponent,
    ClusterComponent,
    EditIndicatorDialogComponent,
  ],
  exports: [ProjectComponent,  AddProjectComponent,  ProjectCategoryComponent, ClusterComponent,EditIndicatorDialogComponent],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    CustomFormsService,FormColumnsService
  ],
  entryComponents: [
    ClusterComponent,
    EditIndicatorDialogComponent
  ],
})
export class ProjectModule { }
