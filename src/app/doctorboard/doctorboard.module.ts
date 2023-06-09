import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorboardRoutingModule } from './doctorboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DoctorcardsComponent } from './doctorcards/doctorcards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientsviewComponent } from './patientsview/patientsview.component';
import { MedicalhistoryComponent } from './medicalhistory/medicalhistory.component';
import { CreatemhComponent } from './createmh/createmh.component';
import { AdminboardModule } from '../adminboard/adminboard.module';
import { EditComponent } from './edit/edit.component';
import { PrescrptionModule } from '../prescrption/prescrption.module';


@NgModule({
  declarations: [
    ProfileComponent,
    DoctorcardsComponent,
    DashboardComponent,
    CreateDoctorComponent,
    DoctorListComponent,
    PatientsviewComponent,
    MedicalhistoryComponent,
    CreatemhComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    DoctorboardRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    PrescrptionModule
    
  ],
  exports:[
    DashboardComponent,
    ProfileComponent,
    DoctorcardsComponent,
    CreateDoctorComponent,
    DoctorListComponent,
  ],
})
export class DoctorboardModule { }
