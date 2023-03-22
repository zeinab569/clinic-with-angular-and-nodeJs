import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_sevices/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  constructor(public doctorService:DoctorService,public activatedRoute:ActivatedRoute){}
  doc: Doctor[]=[];
  ngOnInit(){
    // this.doctorService.findBySalary(2000).subscribe(data=>{ this.doctors=data; console.log(this.doctors)});
    this.doctorService.findBySalary("manar").subscribe(data=>{
      this.doc=data;
    })
  console.log(this.doc)
   };
}
