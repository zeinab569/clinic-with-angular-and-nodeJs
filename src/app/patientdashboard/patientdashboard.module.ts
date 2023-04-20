import { NgModule } from '@angular/core';
import { CommonModule,NgStyle } from '@angular/common';
import{RouterModule}from '@angular/router';
import { PatientdashComponent } from './patientdash/patientdash.component';
import{PatientRoutingModule}from '../patient/patient-routing.module'
import{PatientDashRoutingModule}from'./patientdash-routing.module'
import { AppointmentModule } from '../appointment/appointment.module';
import { FormsModule } from '@angular/forms';
import { PatientModule } from '../patient/patient.module';


@NgModule({
  declarations: [
   
  
    PatientdashComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule,
    AppointmentModule,
    FormsModule,
    PatientModule
  ],
  exports:[
    PatientdashComponent,
    PatientDashRoutingModule
  ]
})
export class PatientdashboardModule { }
