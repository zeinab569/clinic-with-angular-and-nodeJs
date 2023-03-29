import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/_sevices/patient.service';



@Component({
  selector: 'app-patientdelete',
  templateUrl: './patientdelete.component.html',
  styleUrls: ['./patientdelete.component.css']
})
export class PatientdeleteComponent {
  constructor(public patientService:PatientService,public activatedRoute:ActivatedRoute,
    public router:Router,public dialogRef: MatDialogRef<PatientdeleteComponent >,@Inject(MAT_DIALOG_DATA) public data:
    {id:number}) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  deletepatient()
  {
    this.patientService.deletePatient(this.data.id).subscribe(
      d=>
      console.log(d)
    )
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/patientList']);
  }

     
      

  
}
