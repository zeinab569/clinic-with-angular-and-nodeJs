import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from 'src/app/_sevices/patient.service';
import { Buffer } from 'buffer/';
@Component({
  selector: 'app-patientdash',
  templateUrl: './patientdash.component.html',
  styleUrls: ['./patientdash.component.css']
})
export class PatientdashComponent {
  patient:Patient=new Patient(0,"","",0,"",{city:"",street:"",building:0},"","",0,"","");
  constructor(private el:ElementRef,public activatedRoute:ActivatedRoute,public patientServices:PatientService){}
  ngOnInit(): void {
       this.activatedRoute.params.subscribe(p=>
        this.patientServices.getPatientById(p['id']).subscribe(
          data=>
          {
              this.patient=data
              this.patient.img=Buffer.from(this.patient.img).toString();
              console.log(this.patient)
          }
        )
        )
    let alldrpdwn = document.querySelectorAll('.dropdow-container');
    console.log(alldrpdwn,'alldrpdwn#');
    alldrpdwn.forEach((item:any)=>{
      const a = item.parentElement?.querySelector('a:first-child');
      console.log(a,'a#');
      a.addEventListener('click',(e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
      });
      
    });

}
 // responsivemenu 
  responsiveMenu:any;
  // responsivemaincontent
  responsiveContent:any;
  defaultStatus=true;
  openNav(status:any)
  {
    if(status===this.defaultStatus)
    {
      this.responsiveMenu = {
        'display':'block'
      }
      this.responsiveContent={
        'margin-left':'150px'
      }
      this.defaultStatus = false;
    }else
    {
      this.responsiveMenu = {
        'display':null
      }
      this.responsiveContent={
        'margin-left':null
      }
      this.defaultStatus=true;
    }

  }

}
