import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgezGanttComponent} from './components/ngez-gantt/ngez-gantt.component';
import {NgezGanttBodyComponent} from './components/ngez-gantt-body/ngez-gantt-body.component';
import {NgezGanttHeaderComponent} from './components/ngez-gantt-header/ngez-gantt-header.component';
import {NgezGanttMonthBarComponent} from './components/ngez-gantt-month-bar/ngez-gantt-month-bar.component';
import {NgezGanttColorRowComponent} from './components/ngez-gantt-color-row/ngez-gantt-color-row.component';
import {NgezGanttMonthRowComponent} from './components/ngez-gantt-month-row/ngez-gantt-month-row.component';
import {NgezGanttRowComponent} from './components/ngez-gantt-row/ngez-gantt-row.component';
import {NgezGanttColorBarComponent} from './components/ngez-gantt-color-bar/ngez-gantt-color-bar.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgezGanttFooterComponent} from './components/ngez-gantt-footer/ngez-gantt-footer.component';
import {NgezGanttBarDetailComponent} from './components/ngez-gantt-bar-detail/ngez-gantt-bar-detail.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  useBothWheelAxes: true,
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    FlexLayoutModule,
    PerfectScrollbarModule
  ],
  declarations: [
    NgezGanttComponent,
    NgezGanttBodyComponent,
    NgezGanttHeaderComponent,
    NgezGanttRowComponent,
    NgezGanttMonthRowComponent,
    NgezGanttMonthBarComponent,
    NgezGanttColorRowComponent,
    NgezGanttColorBarComponent,
    NgezGanttFooterComponent,
    NgezGanttBarDetailComponent
  ],
  exports: [
    NgezGanttComponent,
    NgezGanttBodyComponent,
    NgezGanttHeaderComponent,
    NgezGanttRowComponent,
    NgezGanttMonthRowComponent,
    NgezGanttMonthBarComponent,
    NgezGanttColorRowComponent,
    NgezGanttColorBarComponent,
    NgezGanttFooterComponent,
    NgezGanttBarDetailComponent
  ],
  entryComponents: [
    NgezGanttBarDetailComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class NgezGanttModule { }
