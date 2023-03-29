import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from 'src/app/_sevices/patient.service';

@Component({
  selector: 'app-patientsview',
  templateUrl: './patientsview.component.html',
  styleUrls: ['./patientsview.component.css']
})
export class PatientsviewComponent {
    // @Output() onStdEdit:EventEmitter<MedicalHistory>=new EventEmitter<MedicalHistory>();
     constructor(public patientService:PatientService,activatedRoute:ActivatedRoute,public router:Router){}
     doc: Patient[]=[];
     flag=false;
     currentDoc:Patient=new Patient(0,"","",0,"",{city:"",street:"",building:0},"","",0,"","");
   save(current:Patient){
      this.flag=true;
      this.currentDoc=current;
      // console.log(this.currentDoc);
   }
   
   update(current:Patient){
     console.log(this.doc);
     this.patientService.edit(current).subscribe(data=>{
       // this.doc=data;
             this.router.navigateByUrl("/home")
             console.log(data);
           })
    }
     ngOnInit(){
       
         this.patientService.getAll().subscribe(data=>{
          this.doc=data;
        //    console.log(data);
        //  console.log(this.doc)
        }); 
       }
 

 
 
 
 
 
 
 //   prescriptionList:any=[];
 //   flag=false;
 //   currentDoc:Prescrption=new Prescrption(0,0,"","","","","","");
 
 //   constructor(public prescrptionService:PrescriptionService,public activatedRouter:ActivatedRoute,public router:Router)
 //   {
 
 //   }
 //   save(current:Prescrption){
 //     this.flag=true;
 //     this.currentDoc=current;
 //     console.log("current->"+this.currentDoc);
 //  }
  
 //  update(current:Prescrption){
 //    console.log(this.currentDoc);
 //    this.prescrptionService.edit(current).subscribe(data=>{
 //      // this.doc=data;
 //            this.router.navigateByUrl("/addDoctor")
 //            console.log("update->"+data);
 //          })
 //   }
 // //   save(current:Prescrption){
   
 // //     this.currentDoc=current;
 // //     console.log(this.currentDoc);
 // //  }
  
 // //  update(current:Prescrption){
 // //   this.prescrptionService.edit(current).subscribe(data=>{
 // //     // this.doc=data;
 // //           this.router.navigateByUrl("/addDoctor")
 // //           console.log(data);
 // //         })
 // //  }
 //  ngOnInit()
 // {
 //   this.activatedRouter.params.subscribe(p=>
 //     {
 //       this.prescrptionService.getPrescriptionByDoctorId(p['id']).subscribe(
 //         data=>{
          
 //          this.prescriptionList=data;
 //          console.log(this.prescriptionList)
 //         //  this.prescriptionList.forEach((presc:Prescrption) => {
 //         //   presc.patient_id.img=Buffer.from(presc.patient_id.img).toString()
 //         //  });
         
 //           //  console.log(this.prescriptionList)
        
            
 //         }
 //       )
 //     })
       
 
 //     // this.prescriptionList.forEach(element : Prescrption => {
 //     //   element.img=Buffer.from(element.img).toString
 //     // });
 // }

}
