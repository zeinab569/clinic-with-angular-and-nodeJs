import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_sevices/doctor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  doctors:Doctor[]=[];
  doc:Doctor=new Doctor(0,"","","","","","","",0,0,"",0,0,0,0,0,"","","","","",0);
  constructor( public doctorService:DoctorService,public activatedRoute:ActivatedRoute){}
  ngOnInit(){
  //   this.doctorService.getAll().subscribe(data=>{
  //     this.doctors=data;
  //  });
    this.activatedRoute.params.subscribe(p=>{
      this.doctorService.getById().subscribe(data=>{
        this.doc=data;
        console.log(data);
      })
    })
  }
}
