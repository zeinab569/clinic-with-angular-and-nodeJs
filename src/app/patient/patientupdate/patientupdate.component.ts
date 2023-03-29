import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from 'src/app/_sevices/patient.service';

@Component({
  selector: 'app-patientupdate',
  templateUrl: './patientupdate.component.html',
  styleUrls: ['./patientupdate.component.css']
})
export class PatientupdateComponent {
  updatePatientForm:any;
  patientDetails:Patient=new Patient(0,"","",0,"",{city:"",street:"",building:0},"","",0,"","");
  constructor(public patientService:PatientService,public activatedRoute:ActivatedRoute,public router:Router){}
  ngOnInit()
  {
    this.updatePatientForm =new FormGroup({
      patientAge:new FormControl(''),
      address:new FormGroup({
        city:new FormControl(''),
        street:new FormControl(''),
        building:new FormControl('')
      }),
       
        patientEmail:new FormControl(''),
        patientPhoneNumber:new FormControl(''),
       
  
      })
      
    this.activatedRoute.params.subscribe(p=>
      this.patientService.getPatientById(p['id']).subscribe(
        d=>{
          console.log(d)
        
          this.patientDetails=d;
          this.updatePatientForm.setValue({
            patientAge:this.patientDetails.age,
            address:this.patientDetails.address,
            patientEmail:this.patientDetails.email,
            patientPhoneNumber:this.patientDetails.phoneNumber
          
          })  
          
        }
      ))
     
         
      
  }
  UpdatePatientInfo(event:any)
  {
   
    this.updatePatientForm.patchValue({
      '${event.target.id}':event.target.value
    })
    
    

  }

  onSubmit()
  {
     //  if (this.patientForm.invalid) {
    //   alert("invalid")
    //   return;
         console.log(this.updatePatientForm.value)
    this.activatedRoute.params.subscribe(
      p=>this.patientService.updatePatient(p['id'],this.updatePatientForm.value).subscribe(
        d=>{
          console.log(d)
              this.router.navigateByUrl("profilePatient/"+p['id'])
        }
      )
    )         
  }

}