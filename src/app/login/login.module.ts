import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
