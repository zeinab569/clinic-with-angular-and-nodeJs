import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren:()=>import('./adminboard/adminboard.module').then(m=>m.AdminboardModule)  },
  { path: 'doctor', loadChildren:()=>import('./doctorboard/doctorboard.module').then(m=>m.DoctorboardModule)  },
 
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
