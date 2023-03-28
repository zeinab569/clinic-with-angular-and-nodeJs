import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorboardRoutingModule } from './doctorboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DoctorcardsComponent } from './doctorcards/doctorcards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DoctorcardsComponent,
    DashboardComponent,
    AddDoctorComponent,
    CreateDoctorComponent,
    
  ],
  imports: [
    CommonModule,
    DoctorboardRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    
  ],
  exports:[
    DashboardComponent,
    ProfileComponent,
    DoctorcardsComponent,
    AddDoctorComponent,
    CreateDoctorComponent
  ],
})
export class DoctorboardModule { }
