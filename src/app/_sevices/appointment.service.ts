
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../_models/Appointment';

@Injectable({
    providedIn: 'root'
  })
export class AppointmentService {
baseURL="http://localhost:8080/appointment/"

getAllAppointments()
{
 return this.httpClient.get<Appointment[]>(this.baseURL)
}

deleteAppointById(id:number)
{
 return this.httpClient.delete("http://localhost:8080/appointmentDelete/"+id)
}

addAppoint(appointment:Appointment )
{
 return this.httpClient.post<Appointment>(this.baseURL,appointment)
}

constructor(private httpClient:HttpClient) { }

}
