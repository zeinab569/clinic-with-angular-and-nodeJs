import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorcardsComponent } from './doctorcards/doctorcards.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:DashboardComponent,children:[
    {path:"profile",component:ProfileComponent},
    {path:"createDoctor", component:CreateDoctorComponent},

  ]},
  {path:"doctorcard", component:DoctorcardsComponent},
  {path:"addDoctor", component:AddDoctorComponent},
  {path:"doctorBoard", component:DashboardComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorboardRoutingModule { }
