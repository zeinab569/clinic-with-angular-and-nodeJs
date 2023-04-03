import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { EditInsuranceComponent } from './edit-insurance/edit-insurance.component';
import { FormsModule } from '@angular/forms';
import { ListInsuranceComponent } from './list-insurance/list-insurance.component';


@NgModule({
  declarations: [
    AddInsuranceComponent,
    EditInsuranceComponent,
    ListInsuranceComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    InsuranceRoutingModule
  ]
})
export class InsuranceModule { }
