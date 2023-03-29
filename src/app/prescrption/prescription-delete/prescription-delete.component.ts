import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from 'src/app/_sevices/prescription.service';

@Component({
  selector: 'app-prescription-delete',
  templateUrl: './prescription-delete.component.html',
  styleUrls: ['./prescription-delete.component.css']
})
export class PrescriptionDeleteComponent {
  constructor(public prescriptionService:PrescriptionService,public activatedRoute:ActivatedRoute,
    public router:Router,public dialogRef: MatDialogRef<PrescriptionDeleteComponent>,@Inject(MAT_DIALOG_DATA) public data: 
  {id:number}) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteprescrption() {
   this.activatedRoute.params.subscribe(
   p=>  {this.prescriptionService.deletePrescription( this.data.id).subscribe(
      d=>console.log(d)
    )
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/prescrptionList']).then(page=> window.location.reload());

  }
   )
     
      this.dialogRef.close();

  }
}
