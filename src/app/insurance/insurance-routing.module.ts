import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { EditInsuranceComponent } from './edit-insurance/edit-insurance.component';
import { ListInsuranceComponent } from './list-insurance/list-insurance.component';

const routes: Routes = [{path:"insurance/update/:id",component:EditInsuranceComponent},
{path:"insurance",component:ListInsuranceComponent},
 {path:"insurance/add",component:AddInsuranceComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
