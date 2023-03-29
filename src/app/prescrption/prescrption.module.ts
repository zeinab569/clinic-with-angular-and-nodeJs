import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import{RouterModule}from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PateintPrescrptionsComponent } from './pateint-prescrptions/pateint-prescrptions.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { PrescriptionDeleteComponent } from './prescription-delete/prescription-delete.component';

import { DoctorPrescrptionsComponent } from './doctor-prescrptions/doctor-prescrptions.component';
import { PrescriptionUpdateComponent } from './prescription-update/prescription-update.component';
import { ListPrescriptionComponent } from './list-prescription/list-prescription.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';



@NgModule({
  declarations: [
    PateintPrescrptionsComponent,
    PrescriptionDetailsComponent,
    PrescriptionDeleteComponent,
    DoctorPrescrptionsComponent,
    PrescriptionUpdateComponent,
    ListPrescriptionComponent,
    AddPrescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PateintPrescrptionsComponent,
    PrescriptionDetailsComponent,
    PrescriptionDeleteComponent
  ]
})
export class PrescrptionModule { }
