import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_sevices/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  constructor(public doctorService:DoctorService,activatedRoute:ActivatedRoute,public router:Router){}
  doc: Doctor[]=[];
  flag=false;
  currentDoc:Doctor=new Doctor(0,"","","","","","","",0,0,"",0,0,0,0,0,"","","","","",0);
 
  delete(id:Number){
    if(confirm('are you sure?!')){
      this.doctorService.deleteById(id).subscribe(a=>{
        console.log(a);
        for (let i = 0; i < this.doc.length; i++) {
          if(id == this.doc[i]._id){
            this.doc.splice(i,1);
            break;
          }
        }
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'deleted Successfully &#128077;',
        showConfirmButton: false,
        timer: 1500
      })

    }
  }
Show(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'deleted Successfully &#128077;',
    showConfirmButton: false,
    timer: 1500
  })
  // Swal.fire("Good job!", "...", "success")
}
save(current:Doctor){
   this.flag=true;
   this.currentDoc=current;
   console.log(this.currentDoc);
}

// update(current:Doctor){
//   console.log(this.doc);
//   this.doctorService.edit(current).subscribe(data=>{
//     // this.doc=data;
//           this.router.navigateByUrl("/doctor/gitdoctors")
//           console.log(data);
//         })
//  }

 thedite(employee:Doctor){
  this.router.navigateByUrl("/doctor/edit")
  return this.E2=employee;
}

  ngOnInit(){
    
      this.doctorService.getAll().subscribe(data=>{
       this.doc=data;
        console.log(data);
  // console.log(this.doc)
     }); 
    }
    public  E2:any;

}
