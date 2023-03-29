import { Component } from '@angular/core';

import { AuthService } from 'src/app/_sevices/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService : AuthService){}
  
 
   // authService.logout();



}
