import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseurl="http://localhost:8080/patient/";
  

  getAll(){
    return this.http.get<Patient[]>(this.baseurl)
  }

  getByid(id:number){
    return this.http.get<Patient>(this.baseurl+id)

  }
  deleteByid(id:number){
    return this.http.delete(this.baseurl+id)
  }
  edit(std:Patient){
    return this.http.patch(this.baseurl+std._id,std)

  }
  add(std:Patient){
    return this.http.post<Patient>(this.baseurl,std)
    
  }
  constructor(public http:HttpClient) { 
    //     this.http.get<MedicalHistory>('http://localhost:8080/MedicalRecord').subscribe(a=>{
    //      console.log(a);
    // });
    }
}
