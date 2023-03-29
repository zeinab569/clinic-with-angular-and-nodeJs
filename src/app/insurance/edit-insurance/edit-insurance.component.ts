import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from 'src/app/_models/insurance';
import { InsuranceService } from 'src/app/_sevices/insurance.service';

@Component({
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.css']
})
export class EditInsuranceComponent {




  Insu:Insurance=new Insurance(0,"aaa","","");

  constructor(public Inservice:InsuranceService,public activatedroute:ActivatedRoute , public router:Router){


  }


  Update(){
    this.Inservice.edit(this.Insu).subscribe((result)=>{
      console.log(result,"Data updated sucessfully");
      this.router.navigateByUrl('/insurance');

    })



  }



}
