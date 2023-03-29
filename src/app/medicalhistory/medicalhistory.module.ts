import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalhistoryRoutingModule } from './medicalhistory-routing.module';
import { ViewMedicalHistoryComponent } from './view-medical-history/view-medical-history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewMedicalHistoryComponent
  ],
  imports: [
    CommonModule,
    MedicalhistoryRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  
  ],
  exports:[
    ViewMedicalHistoryComponent,
  ]
})
export class MedicalhistoryModule { }
