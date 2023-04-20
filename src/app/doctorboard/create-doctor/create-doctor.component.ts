import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_sevices/doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent {


  constructor(public doctorService:DoctorService,public activatedRoute:ActivatedRoute,public router:Router){}

 
  currentDoc:Doctor=new Doctor(0,"","","","","","","",0,0,"",0,0,0,0,0,"","","","","",0);

  save(){
    
    this.doctorService.add(this.currentDoc).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/doctor/doctorList")
    })
  }

}
