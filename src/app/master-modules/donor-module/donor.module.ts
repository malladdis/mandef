import { MaterialModule } from './../../material.module';
import { AddDonorDialogComponent } from './add-donor-dialog/add-donor-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorComponent } from './donor.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DonorService} from './donor.service';
const donorRoutes: Routes = [
  {path: '', component: DonorComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(donorRoutes)
  ],
  declarations: [DonorComponent, AddDonorDialogComponent],
  exports: [RouterModule, DonorComponent, AddDonorDialogComponent],
  entryComponents: [AddDonorDialogComponent]
})
export class DonorModule { }
