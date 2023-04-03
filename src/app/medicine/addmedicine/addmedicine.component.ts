import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/_models/medicine';
import { MedicineService } from 'src/app/_sevices/medicine.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent {

  medicines:Medicine[]=[];
  med:Medicine=new Medicine(0,"aaa","","",0,"aaa",0);

constructor(public medService:MedicineService,public router:Router){


}
save(){
   this.medService.add(this.med).subscribe(data=>{
  //   // this.medicines.push(data);
   console.log(data);
    this.router.navigateByUrl('/medicine');

  })
}


}
