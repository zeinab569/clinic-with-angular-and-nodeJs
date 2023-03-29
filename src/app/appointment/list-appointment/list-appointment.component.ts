import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/_models/Appointment';
import { AppointmentService } from 'src/app/_sevices/appointment.service';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {

   appointmentList:Appointment[]=[]
appointment:Appointment=new Appointment(200,2,6,1,1,"","","")
  constructor(private appointmentservice:AppointmentService,private router:Router) { 
    
  }

  ngOnInit() {
    this.appointmentservice.getAllAppointments().subscribe(data=>
      {
        this.appointmentList=data;
        console.log(data)
      })
  }
  add()
  {
    this.router.navigateByUrl("addAppointment")
  }
  edit(){
    this.router.navigateByUrl("editAppointment")
  }
  delete(id:number){
    if(confirm("Are you sure")){
      this.appointmentservice.deleteAppointById(id).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl("")
      })
       }
  }

}
