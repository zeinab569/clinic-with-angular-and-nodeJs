import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_sevices/doctor.service';

@Component({
  selector: 'app-doctorcards',
  templateUrl: './doctorcards.component.html',
  styleUrls: ['./doctorcards.component.css']
})
export class DoctorcardsComponent {
  constructor(public doctorService:DoctorService,public activatedRoute:ActivatedRoute){}
  doctors: Doctor[]=[];
  doc1:Doctor[]=[];

  ngOnInit(){
     this.doctorService.getAll().subscribe(data=>{ 
      this.doctors=data; 
      console.log(data)
      // this.doc1= this.doctors.filter(p=>p.departmentId==8);
      // console.log(this.doc1);
    });
    };
    // show(typeIcon = TYPE.SUCCESS) {
     
    //   Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then((result) => {
    //     // if (result.isConfirmed) {
         
    //     //   Swal.fire(
    //     //     'Deleted!',
    //     //     'Your file has been deleted.',
    //     //     'success'
    //     //   )
    //     //   return true;
    //     // }
    //   })
    // }
  
// -------------------Filter with deptId--------------------------//
filterDoctorWithDept(doctors:Doctor[], deptId:number){
  return doctors.filter(p=>p.departmentId?._id==deptId);
  // return doctors.filter(p=>p.departmentId==deptId);
  // return doctors.filter(p=>p.fullName.startsWith("s"));
  // return doctors.filter(p=>p._id<=4);
  // return doctors.filter(p=>p.salary>1000 && p.salary!=null);
}
}
