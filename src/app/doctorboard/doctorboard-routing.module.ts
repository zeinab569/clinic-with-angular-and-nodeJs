import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatemhComponent } from './createmh/createmh.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorcardsComponent } from './doctorcards/doctorcards.component';
import { MedicalhistoryComponent } from './medicalhistory/medicalhistory.component';
import { PatientsviewComponent } from './patientsview/patientsview.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:DashboardComponent,children:[
    {path:"profile",component:ProfileComponent},
    {path:"createDoctor", component:CreateDoctorComponent},
    {path:"createMH", component:CreatemhComponent},
    // {path:"doctorList", component:DoctorListComponent},
    {path:"patientList", component:PatientsviewComponent},
    {path:"doctorcard", component:DoctorcardsComponent},


  ]},
  {path:'patientList/historyInfo/:id', component: MedicalhistoryComponent },
  { path: 'home', component: HomeComponent },
  {path:"doctorcard", component:DoctorcardsComponent},
  {path:"doctorBoard", component:DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorboardRoutingModule { }
