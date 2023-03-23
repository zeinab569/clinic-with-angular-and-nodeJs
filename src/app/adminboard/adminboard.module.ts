import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminboardRoutingModule } from './adminboard-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { MaindashComponent } from './maindash/maindash.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    DashboarComponent,
    MaindashComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    AdminboardRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminboardModule { }
