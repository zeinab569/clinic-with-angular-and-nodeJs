import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/_models/patient';

import { Buffer } from 'buffer/';
import { PatientService } from 'src/app/_sevices/patient.service';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
   pateint:Patient=new Patient(0,"","",1,"male",{city:"",street:"",building:1},"","",0,"","")

  constructor(public patientService:PatientService, public activatedRoute:ActivatedRoute)
  {

  }
  ngOnInit()
  {
    
   this.activatedRoute.params.subscribe(
   p=> this.patientService.getPatientById(p['id']).subscribe
   (d=>
    {this.pateint=d
      this.pateint.img=Buffer.from(this.pateint.img).toString();
    console.log(this.pateint.firstName)
    console.log(this.pateint.img)
    })
 
   )
   
  }
  
} 

