import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from '../doctorboard/create-doctor/create-doctor.component';
import { DoctorListComponent } from '../doctorboard/doctor-list/doctor-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateserviceComponent } from './createservice/createservice.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { EditeemployeeComponent } from './editeemployee/editeemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { ListserviceComponent } from './listservice/listservice.component';
import { MaindashComponent } from './maindash/maindash.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';

const routes: Routes = [
  {path:"", component:DashboarComponent,children:[
    {path:"docprofile",component:ProfileComponent},
    {path:"maincontent",component:MaindashComponent},
    {path:"listemployees",component:ListemployeeComponent},
    {path:"addemployees",component:CreateEmployeeComponent},
    {path:"updateemployees",component:EditeemployeeComponent},
    {path:"gitdoctors",component:DoctorListComponent},
    {path:"adddoctor",component:CreateDoctorComponent},
    {path:"addservice",component:CreateserviceComponent},
    {path:"updateservices",component:UpdateserviceComponent},
    {path:"listservices",component:ListserviceComponent}
    
  ]},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminboardRoutingModule { }
