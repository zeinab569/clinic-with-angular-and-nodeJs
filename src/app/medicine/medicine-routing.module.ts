import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';
import { MedicineModule } from './medicine.module';
import { ProfileComponent } from './profile/profile.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const routes: Routes = [  
  {path:"", component:ListMedicineComponent,children:[
  
  {path:"medicine",component:ListMedicineComponent},
{path:"medicine/add",component:AddmedicineComponent},
{path:"profile",component:ProfileComponent},
{path:"profile/update",component:EditProfileComponent},
{path:"medicine/update/:id",component:UpdateMedicineComponent},
  
]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRoutingModule { }
