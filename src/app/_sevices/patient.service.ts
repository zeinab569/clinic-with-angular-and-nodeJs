import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl="http://localhost:8080/patient";
  getAll(){
    return this.http.get<Patient[]>(this.baseUrl)
  }

  getByid(id:number){
    return this.http.get<Patient>(this.baseUrl+id)

  }
  deleteByid(id:number){
    return this.http.delete(this.baseUrl+id)
  }
  edit(std:Patient){
    return this.http.patch(this.baseUrl+std._id,std)

  }
  add(std:Patient){
    return this.http.post<Patient>(this.baseUrl,std) 
  }
  getAllPatients()
   {
      return this.http.get<Patient>(this.baseUrl);
   }
   createPateint(patient:any)
   {
     return this.http.post<Patient>(this.baseUrl,patient)
   }
   getPatientById(id:number)
   {
     return this.http.get<Patient>(this.baseUrl+"/"+id);
   }
   deletePatient(id:number)
   {
     return this.http.delete(this.baseUrl+"/"+id);
     
   }
   updatePatient(id:number,patient:any)
   {
     return this.http.patch<Patient>(this.baseUrl+"/"+id,patient);
   }
  
  constructor(public http:HttpClient) { }
}
