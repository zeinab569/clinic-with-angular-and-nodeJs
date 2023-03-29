import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prescrption } from 'src/app/_models/prescrption';
import { PrescriptionService } from 'src/app/_sevices/prescription.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prescription-update',
  templateUrl: './prescription-update.component.html',
  styleUrls: ['./prescription-update.component.css']
})
export class PrescriptionUpdateComponent {
  medicinces=[{id:1,Name:"pandol"},{id:2,Name:"beeslinecleanser"}]
  addFlag=false
  presdetails:Prescrption=new Prescrption(0,"",[],"",0,0,0,0);
  updateForm = new FormGroup({
    id: new FormControl(''),
    quantity: new FormControl(''),
    period:new FormControl('')

  });
  constructor(public prescrpService:PrescriptionService,public activateRoute:ActivatedRoute){
  }
 
  ngOnInit()
  {
    this.activateRoute.params.subscribe(p=>

      {
        console.log(p['id']);
        this.prescrpService.getPrescriptionById(p['id']).subscribe(
          data=>
          {
            this.presdetails=data
  
            console.log(data);
          }
          
          
       )
      }
     
  
    )
      }
      onSubmit()
      {
        this.addFlag=false;
        this.presdetails.medicine.push(this.updateForm.value)
        this.updatePrescription();
        
        console.warn(this.updateForm.value);
      }
      updatePrescription()
      {
        console.log(this.presdetails.medicine)
           this.activateRoute.params.subscribe(
            p=>{

              this.prescrpService.updatePrescrption(p['id'],{medicine:this.updateForm.value}).subscribe(
                data=>
                {
        
                  console.log(data);
                }
                
                
             )
            }
           )
          }
}
