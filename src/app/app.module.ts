import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorboardModule } from './doctorboard/doctorboard.module';
import { CommonModule } from '@angular/common';
import { AdminboardModule } from './adminboard/adminboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { from } from 'rxjs';
import { AuthInterceptor } from './_helper/auth-interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from './shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { CheckroleComponent } from './auth/checkrole/checkrole.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CheckroleComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    DoctorboardModule,
    AdminboardModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    SharedModule,
    MatRadioModule ,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
   
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
