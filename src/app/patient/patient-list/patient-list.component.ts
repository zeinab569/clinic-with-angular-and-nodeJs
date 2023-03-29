import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from 'src/app/_sevices/patient.service';
import { Buffer } from 'buffer/';
import { PatientdeleteComponent } from '../patientdelete/patientdelete.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patientsList:any;
     constructor(public patientSerivice:PatientService,public dialog:MatDialog){}
     ngOnInit()
     {
          this.patientSerivice.getAllPatients().subscribe(
            d=>{
              this.patientsList=d
             this.patientsList.forEach((patient:Patient) => {
                 patient.img=Buffer.from(patient.img).toString()
              });
              console.log(d)
            }
          )
     }
     openDialog(enterAnimationDuration: string, exitAnimationDuration: string,id:number): void {
      this.dialog.open(PatientdeleteComponent, {
        width: '550px',
        enterAnimationDuration,
        exitAnimationDuration,
        panelClass: '.custom-modalbox',
        data:{id:id}
  
      });
    }
      
}

