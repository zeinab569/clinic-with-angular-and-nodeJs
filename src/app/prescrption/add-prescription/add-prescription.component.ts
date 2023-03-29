import { Component, Input } from '@angular/core';
import { Prescrption } from 'src/app/_models/prescrption';
import { PrescriptionService } from 'src/app/_sevices/prescription.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent {
  @Input() doctorId:number=0;
  @Input() patientId:number=0;
  @Input()departmentId:number=0
pres:Prescrption=new Prescrption(0,".",{id:-1,quantity:"",period:"0d"},".",this.doctorId,this.patientId,0,this.departmentId);

constructor(public prescriptionService:PrescriptionService){}
  ngOnInit()
  {
       this.prescriptionService.createPrescription(this.pres).subscribe(
        d=>console.log(d)
       )
  }
}
