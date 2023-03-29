import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PatientdashComponent } from './patientdashboard/patientdash/patientdash.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { CreatepatientComponent } from './patient/createpatient/createpatient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientdeleteComponent } from './patient/patientdelete/patientdelete.component';
import { PatientupdateComponent } from './patient/patientupdate/patientupdate.component';
import { PateintPrescrptionsComponent } from './prescrption/pateint-prescrptions/pateint-prescrptions.component';
import { PrescriptionDetailsComponent } from './prescrption/prescription-details/prescription-details.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren:()=>import('./adminboard/adminboard.module').then(m=>m.AdminboardModule)  },
  { path: 'doctor', loadChildren:()=>import('./doctorboard/doctorboard.module').then(m=>m.DoctorboardModule)  },
 // { path:'patient',loadChildren:()=>import('./patientdashboard/patientdashboard.module').then(m=>m.PatientdashboardModule)},
 {path:"patientDashboard/:id",component:PatientdashComponent},
 {path:'profilePatient/:id',component: PatientProfileComponent},
          {path:"updatePateint/:id",component:PatientupdateComponent},
          {path:"deletePatient/:id",component:PatientdeleteComponent},
          {path:"patientList",component:PatientListComponent},
          {path:"patientCreation",component:CreatepatientComponent},
          {path:"patientPrescrptions/:id",component:PateintPrescrptionsComponent},
          {path:'prescrptiondetails/:id',component:PrescriptionDetailsComponent},
  {path: 'login', component: LoginComponent},

  {path: 'signup', component: RegisterComponent},
  {path:"**",component:NotfoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
