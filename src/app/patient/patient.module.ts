import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule}from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import{PatientRoutingModule}from'./patient-routing.module'
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientdeleteComponent } from './patientdelete/patientdelete.component';
import { PatientupdateComponent } from './patientupdate/patientupdate.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';



@NgModule({
  declarations: [
    PatientListComponent,
    PatientdeleteComponent,
    PatientupdateComponent,
    PatientProfileComponent,
    CreatepatientComponent
  ],
  
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CreatepatientComponent,
    PatientProfileComponent,
    PatientupdateComponent,
    PatientListComponent
   
  ],
})
export class PatientModule { }
