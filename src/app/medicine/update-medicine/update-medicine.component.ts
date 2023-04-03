import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/_models/medicine';
import { MedicineService } from 'src/app/_sevices/medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {





  
 medicines:Medicine[]=[];
 med:Medicine=new Medicine(0,"aaa","","",0,"aaa",0);

constructor(public medService:MedicineService,public activatedroute:ActivatedRoute , public router:Router){


}
id=this.activatedroute.params.subscribe((i)=>{
 console.log(i);
});
ngOnInit(){
 console.log(this.activatedroute.snapshot.params['id']);


 this.activatedroute.params.subscribe(data=>{
   this.medService.getById(data['id']).subscribe(result=>{
     // this.med=result;
      this.med=result;
      console.log(result);
   })
 })
 

}

Update(){
 this.medService.edit(this.activatedroute.snapshot.params["id"],this.med).subscribe((result)=>{
   console.log(result,"Data updated sucessfully");
   this.router.navigateByUrl('/medicine');

 })
  this.medService.add(this.med).subscribe(data=>{
 //   // this.medicines.push(data);
  console.log(data);
   this.router.navigateByUrl('/medicine');


})

}

}
