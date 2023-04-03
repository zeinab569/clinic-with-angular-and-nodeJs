import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRoutingModule } from './medicine-routing.module';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { FormsModule } from '@angular/forms';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    ListMedicineComponent,
    AddmedicineComponent,
    UpdateMedicineComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,FormsModule,
    MedicineRoutingModule
  ]
})
export class MedicineModule { }
