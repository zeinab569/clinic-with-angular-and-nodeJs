import { Component, Input } from '@angular/core';
import { Prescrption } from 'src/app/_models/prescrption';
import { PrescriptionService } from 'src/app/_sevices/prescription.service';
import{FormControl, Validators, FormGroup}from'@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent {
  prescriptionForm:any;
  @Input() doctorId:number=0;
  @Input() patientId:number=0;
  @Input()departmentId:number=0
pres:Prescrption=new Prescrption(0,".",{id:-1,quantity:"",period:"0d"},".",this.doctorId,this.patientId,0,this.departmentId);

constructor(public prescriptionService:PrescriptionService,public activatedRoute:ActivatedRoute,public router:Router){}
  ngOnInit()
  {
    this.activatedRoute.params.subscribe(p=>{
      this.pres.patient_id=p['id'];
      this.pres.doctor_id=14;
      this.prescriptionService.createPrescription(this.pres).subscribe(
        d=>{
        this.pres=d;
          console.log(d);
          
        }
       )
    })
        // this.prescriptionForm=new FormGroup(
        //   {
        //     patient_id:new FormControl(''),
        //     doctor_id:new FormControl(''),
        //     deppt_id:new FormControl('')
        //   }
        // )

  }
createPrescription()
{
  // this.activatedRoute.params.subscribe(p=>{
  //   this.pres.patient_id=p['id'];
  //   this.pres.doctor_id=14;
  //   this.prescriptionService.createPrescription(this.pres).subscribe(
  //     d=>console.log(d)
  //    )
  // })

}
}
