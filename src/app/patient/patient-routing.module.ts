import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientdeleteComponent } from './patientdelete/patientdelete.component';
import { PatientupdateComponent } from './patientupdate/patientupdate.component';



const routes: Routes = [
  {path:'profilePatient/:id',component: PatientProfileComponent},
  {path:"updatePateint/:id",component:PatientupdateComponent},
  {path:"deletePatient/:id",component:PatientdeleteComponent},
  {path:"patientList",component:PatientListComponent},
  {path:"patientCreation",component:CreatepatientComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }