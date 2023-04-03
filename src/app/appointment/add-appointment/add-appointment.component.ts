import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/_models/Appointment';
import { AppointmentService } from 'src/app/_sevices/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointment:Appointment=new Appointment(200,2,6,1,2,"","","")
  constructor(private appointmentService:AppointmentService,private router:Router) { }

  ngOnInit() {
 
  }

  addAppointment()
  {console.log(this.appointment)
    this.appointmentService.addAppoint(this.appointment).subscribe((inv)=>{
      console.log(inv)
      this.router.navigateByUrl("appointmentList")
    })
    
  }

}
