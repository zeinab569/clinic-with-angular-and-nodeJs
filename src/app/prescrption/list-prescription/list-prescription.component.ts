import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionService } from 'src/app/_sevices/prescription.service';
import { PrescriptionDeleteComponent } from '../prescription-delete/prescription-delete.component';

@Component({
  selector: 'app-list-prescription',
  templateUrl: './list-prescription.component.html',
  styleUrls: ['./list-prescription.component.css']
})
export class ListPrescriptionComponent {
  prescriptionList:any;
  constructor(public prescrptionService:PrescriptionService, public dialog: MatDialog)
  {

  }
 ngOnInit()
{
 this.prescrptionService.getAllPrescription().subscribe(data=>{
   this.prescriptionList=data;
   console.log(this.prescriptionList)
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
