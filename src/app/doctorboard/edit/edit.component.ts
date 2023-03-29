import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_sevices/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  currentDoc:Doctor=new Doctor(0,"","","","","","","",0,0,"",0,0,0,0,0,"","","","","",0);
  constructor(public doctorService:DoctorService,activatedRoute:ActivatedRoute,public router:Router){}

  update(employee:Doctor){
    if(confirm("are you sure")){
    this.doctorService.edit(employee).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/doctor/doctorList")
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'updated Successfully &#128077;',
      showConfirmButton: false,
      timer: 1500
    })
  }}
}
