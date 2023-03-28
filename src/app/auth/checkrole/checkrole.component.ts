import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_sevices/auth.service';

@Component({
  selector: 'app-checkrole',
  templateUrl: './checkrole.component.html',
  styleUrls: ['./checkrole.component.css']
})
export class CheckroleComponent implements OnInit {
  PharamacistRole = false;
  doctorRole = false;
  accountantRole = false;
  reseptionistRole = false;
  adminRole=false;
  reseptionRole=false;
 
  role: any;

  userIsAuthenticated =false;
  private authListenerSubs: any;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated= isAuthenticated;
    });

    this.role = this.authService.getUserRole();
    console.log(this.role);

    if(this.role === "pharmacist"){
      this.PharamacistRole = true;
    }
    else if(this.role === "doctor"){
      this.doctorRole = true;
    }
    else if(this.role === "admin"){
      this.adminRole = true;
    }
    else if(this.role === "accountant"){
      this.accountantRole = true;
    }
    else if(this.role === "receptionist" ){
      this.reseptionRole = true;
    }

  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
