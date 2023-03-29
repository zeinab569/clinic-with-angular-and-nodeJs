import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_sevices/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-headeruserdetail',
  templateUrl: './headeruserdetail.component.html',
  styleUrls: ['./headeruserdetail.component.css']
})
export class HeaderuserdetailComponent implements OnInit {
  PharamacistRole = false;
  doctorRole = false;
  accountantRole = false;
  reseptionistRole = false;
  adminRole=false;
  patiantionRole=false;
 
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
    else if(this.role === "receptionist"){
      this.reseptionistRole = true;
    }
    else if(this.role === "pationt" ){
      this.patiantionRole = true;
    }

  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
