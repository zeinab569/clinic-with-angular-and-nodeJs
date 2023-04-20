import { AuthService } from 'src/app/_sevices/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authService : AuthService, private sankBar : MatSnackBar){}

  onLogin(form:  NgForm){
    if(form.invalid){
      this.sankBar.open("Please enter valid data", 'Close');
      return;

    }
    this.sankBar.open("Logging... Please wait ", 'Close');
    this.authService.login(form.value.email,form.value.password);
   
    console.log(this.authService.getUserRole)
  };

}
