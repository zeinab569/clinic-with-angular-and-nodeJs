import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalHistory } from 'src/app/_models/medical-history';
import { MedicalHistoryService } from 'src/app/_sevices/medical-history.service';

@Component({
  selector: 'app-view-medical-history',
  templateUrl: './view-medical-history.component.html',
  styleUrls: ['./view-medical-history.component.css']
})
export class ViewMedicalHistoryComponent {


  MHistoryAll:MedicalHistory[]=[];

  history:MedicalHistory=new MedicalHistory("","","",0,0,0,"",0,"","");
  
  constructor( public medicalHistoryService:MedicalHistoryService,public activatedRoute:ActivatedRoute,public router:Router){}
  
  
  update(){
    console.log(this.history);
    this.medicalHistoryService.edit(this.history).subscribe(data=>{
      // this.doc=data;
      
      
            this.router.navigateByUrl("/home")
            console.log(data);
          })
   }

  //  getOnLoad(id:number){
  //   this.medicalHistoryService.getById(id).subscribe(data=>{
  //     this.mhistory=data;
  //     console.log("pat->"+id);
  //     console.log(this.mhistory);
  //   })
  //  }

  ngOnInit(){
//     this.activatedRoute.params.subscribe((a)=>{
//       // this.appointmentId = a['id'];
//       console.log(a);
//       this.medicalHistoryService.getById(a['id']).subscribe(data=>{
//         this.history=data;
//         console.log(data);
//     })

// })
this.activatedRoute.params.subscribe((a)=>{
  // this.appointmentId = a['id'];
  console.log(a);
  this.medicalHistoryService.getById(24).subscribe(data=>{
    this.history=data;
    console.log(data);
})

})

};



}
