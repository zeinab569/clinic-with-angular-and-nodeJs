import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminboardRoutingModule } from './adminboard-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


@NgModule({
  declarations: [
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminboardRoutingModule,
    FormsModule
  ]
})
export class AdminboardModule { }
