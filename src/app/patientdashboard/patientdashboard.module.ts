import { NgModule } from '@angular/core';
import { CommonModule,NgStyle } from '@angular/common';
import{RouterModule}from '@angular/router';
import { PatientdashComponent } from './patientdash/patientdash.component';
import{PatientRoutingModule}from '../patient/patient-routing.module'
import{PatientDashRoutingModule}from'./patientdash-routing.module'


@NgModule({
  declarations: [
   
  
    PatientdashComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule
  ],
  exports:[
    PatientdashComponent,
    PatientDashRoutingModule
  ]
})
export class PatientdashboardModule { }
