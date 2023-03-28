import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalHistory } from 'src/app/_models/medical-history';
import { MedicalHistoryService } from 'src/app/_sevices/medical-history.service';

@Component({
  selector: 'app-createmh',
  templateUrl: './createmh.component.html',
  styleUrls: ['./createmh.component.css']
})
export class CreatemhComponent {
  constructor(public doctorService:MedicalHistoryService,public activatedRoute:ActivatedRoute,public router:Router){}

 
  mh:MedicalHistory=new MedicalHistory("","","",0,0,0,"");

  save(){
    
    this.doctorService.add(this.mh).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/home")
    })
  }
}
