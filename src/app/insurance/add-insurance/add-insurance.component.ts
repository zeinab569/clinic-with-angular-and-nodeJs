import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from './../../_models/insurance';
import { InsuranceService } from 'src/app/_sevices/insurance.service';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent {


  Insu:Insurance=new Insurance(0,"","","");

constructor(public InsuService:InsuranceService,public router:Router){


}
save(){
   this.InsuService.add(this.Insu).subscribe(data=>{

   console.log(data);
    this.router.navigateByUrl('/insurance');

  })
}


}
