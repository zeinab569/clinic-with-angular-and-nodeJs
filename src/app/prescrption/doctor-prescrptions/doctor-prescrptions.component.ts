import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from 'src/app/_sevices/prescription.service';
import { PrescriptionDeleteComponent } from '../prescription-delete/prescription-delete.component';

@Component({
  selector: 'app-doctor-prescrptions',
  templateUrl: './doctor-prescrptions.component.html',
  styleUrls: ['./doctor-prescrptions.component.css']
})
export class DoctorPrescrptionsComponent {
  prescriptionList:any;
  constructor(public prescrptionService:PrescriptionService, public dialog: MatDialog,public activatedRouter:ActivatedRoute)
  {

  }
 ngOnInit()
{
  this.activatedRouter.params.subscribe(p=>
    {
      this.prescrptionService.getPrescriptionByDoctorId(p['id']).subscribe(
        data=>{
          this.prescriptionList=data
          console.log(data)}
      )
    })
  
}


openDialog(enterAnimationDuration: string, exitAnimationDuration: string,id:number): void {
 this.dialog.open(PrescriptionDeleteComponent, {
   width: '550px',
   enterAnimationDuration,
   exitAnimationDuration,
   data:{id:id}

 });}
}
