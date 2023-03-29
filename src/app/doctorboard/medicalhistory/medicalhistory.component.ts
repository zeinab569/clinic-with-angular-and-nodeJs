import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalHistory } from 'src/app/_models/medical-history';
import { MedicalHistoryService } from 'src/app/_sevices/medical-history.service';

@Component({
  selector: 'app-medicalhistory',
  templateUrl: './medicalhistory.component.html',
  styleUrls: ['./medicalhistory.component.css']
})
export class MedicalhistoryComponent {
    // @Input() id:Number=0;
    MHistoryAll:MedicalHistory[]=[];

    mhistory:MedicalHistory=new MedicalHistory("","","",0,0,0,"",0,"","");
    
    constructor( public medicalHistoryService:MedicalHistoryService,public activatedRoute:ActivatedRoute,public router:Router){}
    
    
    update(){
      console.log(this.mhistory);
      this.medicalHistoryService.edit(this.mhistory).subscribe(data=>{
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
      this.activatedRoute.params.subscribe((a)=>{
        // this.appointmentId = a['id'];
        console.log(a);
        this.medicalHistoryService.getById(a['id']).subscribe(data=>{
          this.mhistory=data;
          console.log(data);
      })
  
  })};
}

