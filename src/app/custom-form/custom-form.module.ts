import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDashboardComponent } from './forms-dashboard/forms-dashboard.component';
import { ShowFormsComponent } from './show-forms/show-forms.component';
import { Path } from 'leaflet';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { providers } from 'ng2-dnd';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsService } from './custom-forms.service';
import { FormDesignComponent } from './form-design/form-design.component';
import { FormSectionsService } from './form-sections.service';
import { DraggableComponent } from './draggable/draggable.component';
import { EscapeHtmlPipe } from './pipes/keepHtmlSafe.pipe';
import { FormColumnsService } from './services/form-columns.service';
import { GeneratedFormService } from './services/generated-form.service';
import { FormsdetailComponent } from './formsdetail/formsdetail.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { AddRecordsComponent } from './add-records/add-records.component';
import { InputSanitizerPipe } from './pipes/input-sanitizer.pipe';
import { FormsDataService } from './services/forms-data.service';
import { ProjectService } from '../master-modules/project-module/project.service';
import { ChipsTagComponent } from './chips-tag/chips-tag.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FormDataFileService } from './services/form-data-file.service';
import { CustomformErrorComponent } from './customform-error/customform-error.component';
import { SharedUsersComponent } from './shared-users/shared-users.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmService } from './services/confirm.service';
import { LocationDialogComponent } from './location-dialog/location-dialog.component';
import { AgmCoreModule } from '@agm/core';

const formsRoute:Routes=[
  {
    path:'',
    component:FormsDashboardComponent,
    children:[
      {
        path:'',
        component:ShowFormsComponent
      }
    ]
  },
  {
    path:'form-design/:id',
    component:FormDesignComponent
  },
  {
    path:'form-detail/:id',
    component:FormsdetailComponent
  },
  {
    path:'add-records/:id',
    component:AddRecordsComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule,
    RouterModule.forChild(formsRoute),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_n7J4QTEgv89AWttZDKYf7ALt41MLYrQ'
    }),
  ],
  declarations: [FormsDashboardComponent, ShowFormsComponent, DialogBodyComponent,FormDesignComponent, DraggableComponent,EscapeHtmlPipe, 
    FormsdetailComponent, ShareDialogComponent, AddRecordsComponent, InputSanitizerPipe, ChipsTagComponent, FileUploaderComponent, CustomformErrorComponent, SharedUsersComponent, ConfirmDialogComponent, LocationDialogComponent],
  exports:[FormsDashboardComponent, ShowFormsComponent,DialogBodyComponent,FormDesignComponent,DraggableComponent,FormsdetailComponent,
    ShareDialogComponent,AddRecordsComponent,FileUploaderComponent],
  providers:[CustomFormsService,FormSectionsService,FormColumnsService,GeneratedFormService,FormsDataService,ProjectService,FormDataFileService,ConfirmService],
  entryComponents:[DialogBodyComponent,FormDesignComponent,ShareDialogComponent,FileUploaderComponent,CustomformErrorComponent,SharedUsersComponent,ConfirmDialogComponent,LocationDialogComponent]
})
export class CustomFormModule { }
