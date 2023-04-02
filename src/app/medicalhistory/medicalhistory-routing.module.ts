import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMedicalHistoryComponent } from './view-medical-history/view-medical-history.component';

const routes: Routes = [
  {
    path:'medicalHistory',component:ViewMedicalHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalhistoryRoutingModule { }
