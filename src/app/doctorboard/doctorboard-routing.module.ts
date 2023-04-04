import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashComponent } from '../adminboard/maindash/maindash.component';
import { HomeComponent } from '../home/home.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatemhComponent } from './createmh/createmh.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorcardsComponent } from './doctorcards/doctorcards.component';
import { EditComponent } from './edit/edit.component';
import { MedicalhistoryComponent } from './medicalhistory/medicalhistory.component';
import { PatientsviewComponent } from './patientsview/patientsview.component';
import { ProfileComponent } from './profile/profile.component';
import { PrescriptionUpdateComponent } from '../prescrption/prescription-update/prescription-update.component';
import { AddPrescriptionComponent } from '../prescrption/add-prescription/add-prescription.component';

const routes: Routes = [
  {path:"", component:DashboardComponent,children:[
    {path:"profile",component:ProfileComponent},
    {path:"maincontent",component:MaindashComponent},

    {path:"createDoctor", component:CreateDoctorComponent},
    {path:"createMH", component:CreatemhComponent},
    {path:"doctorList", component:DoctorListComponent,children:[
      {path:"patientList", component:PatientsviewComponent},

    ]},
    {path:"patientList", component:PatientsviewComponent},
    {path:"doctorcard", component:DoctorcardsComponent},
    // {path:"edit", component:EditComponent},



  ]},
  {path:"edit", component:EditComponent},

  {path:'patientList/historyInfo/:id', component: MedicalhistoryComponent },
  {path:'patientList/prescrptionadd/:id', component: AddPrescriptionComponent  },
  {path:'patientList/prescrptionUpdate/:id', component: PrescriptionUpdateComponent },

  {path: 'home', component: HomeComponent },
  {path:"doctorcard", component:DoctorcardsComponent},
  {path:"doctorBoard", component:DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorboardRoutingModule { }
