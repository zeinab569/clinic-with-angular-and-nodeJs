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
import { ViewMedicalHistoryComponent } from './medicalhistory/view-medical-history/view-medical-history.component';
import { EditAppointmentComponent } from './appointment/edit-appointment/edit-appointment.component';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { EditInvoiceComponent } from './invoice/editInvoice/editInvoice.component';
import { ListAppointmentComponent } from './appointment/list-appointment/list-appointment.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { DoctorcardsComponent } from './doctorboard/doctorcards/doctorcards.component';

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
          {path:"appointmentList",component:ListAppointmentComponent},
          {path:"invoiceList",component:InvoiceListComponent},
          {path:"addInvoice",component:AddInvoiceComponent},
          {path:"editInvoice",component:EditInvoiceComponent},
          {path:"addAppointment",component:AddAppointmentComponent},
          {path:"editAppointment",component:EditAppointmentComponent},
  {path: 'login', component: LoginComponent},
  {path:"updatePateint/:id",component:PatientupdateComponent},
  {path:"deletePatient/:id",component:PatientdeleteComponent},
  {path:"patientList",component:PatientListComponent},
  {path:"patientCreation",component:CreatepatientComponent},
  {path:"patientPrescrptions/:id",component:PateintPrescrptionsComponent},
  {path:'prescrptiondetails/:id',component:PrescriptionDetailsComponent},
  {path:"doctorcard", component:DoctorcardsComponent},
  {path:"MedicalHistory/:id",component:ViewMedicalHistoryComponent }
  ,{path: 'login', component: LoginComponent},
  {path: 'view', component: ViewMedicalHistoryComponent},
  {path: 'signup', component: RegisterComponent},
  { path: 'medicine', loadChildren:()=>import('./medicine/medicine.module').then(m=>m.MedicineModule) },
  { path: 'insurance', loadChildren:()=>import('./insurance/insurance.module').then(m=>m.InsuranceModule)  },

  {path:"**",component:NotfoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
