import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminboardRoutingModule } from './adminboard-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { MaindashComponent } from './maindash/maindash.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { EditeemployeeComponent } from './editeemployee/editeemployee.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorboardModule } from '../doctorboard/doctorboard.module';
import { CreateserviceComponent } from './createservice/createservice.component';
import { ListserviceComponent } from './listservice/listservice.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import { PatientModule } from '../patient/patient.module';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    DashboarComponent,
    MaindashComponent,
    ProfileComponent,
    ListemployeeComponent,
    EditeemployeeComponent,
    CreateserviceComponent,
    ListserviceComponent,
    UpdateserviceComponent,
    
  ],
  imports: [
    CommonModule,
    AdminboardRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    DoctorboardModule,
    PatientModule
  ],
  exports:[
    CreateEmployeeComponent,
    DashboarComponent,
    MaindashComponent,
    ProfileComponent,
    ListemployeeComponent,
    EditeemployeeComponent,

  ]
})
export class AdminboardModule { }
