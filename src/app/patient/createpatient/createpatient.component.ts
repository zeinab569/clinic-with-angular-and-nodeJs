import { Component } from '@angular/core';
import{FormControl, Validators, FormGroup}from'@angular/forms'
import { Route, Router } from '@angular/router';
import { PatientService } from 'src/app/_sevices/patient.service';


@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent {
 
  patientForm:any;
  insuranceCompany=[{id:1,Name:"Delta Insurance Company"},{id:2,Name:"Elsafoua Insurance Company"}]
  constructor(public patientService:PatientService,public router:Router)
   {}
   
   ngOnInit(): void
   {
    
    this.patientForm=new FormGroup({
      patientFirstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      patientLastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      patientAge:new FormControl('',Validators.min(1)),
      patientGender:new FormControl(''),
      address:new FormGroup({
        city:new FormControl('',[Validators.minLength(4),Validators.required]),
        street:new FormControl('',[Validators.minLength(4),Validators.required]),
        building:new FormControl('')
      }),
  
      patientEmail:new FormControl('',[Validators.email]),
      patientInsuranceNumber:new FormControl('',[Validators.required,Validators.minLength(14),Validators.maxLength(14)]),
      patientPhoneNumber:new FormControl('',[Validators.pattern("^(010|011|012|015)+-+\d{8}$")]),
      img:new FormControl(" "),
      insuranceCompany:new FormControl('')
  
      })
   }
   fileChanged(event:any){

    const file =(event.target).files[0];
    this.patientForm.patchValue({
      img:file
    });
    console.log(file);
    
    }
  onSubmit()
  {
    //  if (this.patientForm.valid) {
    //   // alert("invalid Data")
    //   return;
    //  }
    console.log(this.patientForm.valid)
    console.log(this.patientForm.get('address.city').value)
    const formData=new FormData();
    formData.append('patientFirstName',this.patientForm.value.patientFirstName);
    formData.append('patientLastName',this.patientForm.value.patientLastName)
    formData.append('patientAge',this.patientForm.value.patientAge)
    formData.append('patientGender',this.patientForm.value.patientGender);
    formData.append('address[city]',this.patientForm.get('address.city').value);
    formData.append('address[street]',this.patientForm.get('address.street').value);
    formData.append('address[building]',this.patientForm.get('address.building').value);
    formData.append('patientEmail',this.patientForm.value.patientEmail);
    formData.append('patientInsuranceNumber',this.patientForm.value.patientInsuranceNumber);
    formData.append('patientPhoneNumber',this.patientForm.value.patientPhoneNumber);
    formData.append('img',this.patientForm.value.img);
    formData.append('insuranceCompany',this.patientForm.insuranceCompany)
  
   this.patientService.createPateint(
    formData).subscribe(
        p=>{
          this.patientForm.reset()
         
        }
   )
 
  }
}
