import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prescrption } from 'src/app/_models/prescrption';
import { PrescriptionService } from 'src/app/_sevices/prescription.service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent {
  presdetails:Prescrption=new Prescrption(0,"",[],"",0,0,0,0);
  constructor(public prescrpService:PrescriptionService,public activateRoute:ActivatedRoute){
  }
  ngOnInit()
  {
    this.activateRoute.params.subscribe(p=>(
      this.prescrpService.getPrescriptionById(p['id']).subscribe(
        data=>
        {
          console.log(p['id'])
          this.presdetails=data
          console.log(data);
        }
        
        
     )
     
  
    )
      )
      
  }

}
