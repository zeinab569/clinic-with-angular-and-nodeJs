import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import {FormsModule}  from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListAppointmentComponent,
    EditAppointmentComponent,
    AddAppointmentComponent
  ],
  exports:[
    ListAppointmentComponent,
    EditAppointmentComponent,
    AddAppointmentComponent
  ]
})
export class AppointmentModule { }
