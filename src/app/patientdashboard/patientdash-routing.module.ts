import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepatientComponent } from '../patient/createpatient/createpatient.component';
import { PatientListComponent } from '../patient/patient-list/patient-list.component';
import { PatientProfileComponent } from '../patient/patient-profile/patient-profile.component';
import { PatientModule } from '../patient/patient.module';
import { PatientdeleteComponent } from '../patient/patientdelete/patientdelete.component';
import { PatientupdateComponent } from '../patient/patientupdate/patientupdate.component';
import { PateintPrescrptionsComponent } from '../prescrption/pateint-prescrptions/pateint-prescrptions.component';
import { PrescriptionDeleteComponent } from '../prescrption/prescription-delete/prescription-delete.component';
import { PrescriptionDetailsComponent } from '../prescrption/prescription-details/prescription-details.component';
import { PatientdashComponent } from './patientdash/patientdash.component';


const routes:Routes=[
 
    {path:"",component:PatientdashComponent,
    children:[
        {path:'profilePatient/:id',component: PatientProfileComponent},
        {path:"updatePateint/:id",component:PatientupdateComponent},
        {path:"deletePatient/:id",component:PatientdeleteComponent},
        {path:"patientList",component:PatientListComponent},
        {path:"patientCreation",component:CreatepatientComponent},
    ]
},
{path:'prescrptiondetails/:id',component:PrescriptionDetailsComponent},
//   {path:'prescrptionList',component:ListPrescriptionComponent},
//   {path:'prescrptionupdate/:id',component:PrescriptionUpdateComponent},
  {path:'prescriptiondelete/:id',component:PrescriptionDeleteComponent},
//   {path:"doctorprescrptions/:id",component:DoctorPrescrptionsComponent},
  {path:"patientPrescrptions/:id",component:PateintPrescrptionsComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDashRoutingModule { }