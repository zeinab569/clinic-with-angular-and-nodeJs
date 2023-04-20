import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPrescrptionsComponent } from './doctor-prescrptions/doctor-prescrptions.component';
import { ListPrescriptionComponent } from './list-prescription/list-prescription.component';
import { PateintPrescrptionsComponent } from './pateint-prescrptions/pateint-prescrptions.component';
import { PrescriptionDeleteComponent } from './prescription-delete/prescription-delete.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { PrescriptionUpdateComponent } from './prescription-update/prescription-update.component';




const routes: Routes = [
    {path:'prescrptiondetails/:id',component:PrescriptionDetailsComponent},
    {path:'prescrptionList',component:ListPrescriptionComponent},
    {path:'prescrptionupdate/:id',component:PrescriptionUpdateComponent},
    {path:'prescriptiondelete/:id',component:PrescriptionDeleteComponent},
    {path:"doctorprescrptions/:id",component:DoctorPrescrptionsComponent},
    {path:"patientPrescrptions/:id",component:PateintPrescrptionsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescrptionRoutingModule { }