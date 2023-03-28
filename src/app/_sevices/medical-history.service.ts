import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalHistory } from '../_models/medical-history';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {

  baseurl="http://localhost:8080/MedicalRecord/";
  baseurl2="http://localhost:8080/MedicalRecord/";
  

  getAll(){
    return this.http.get<MedicalHistory[]>(this.baseurl)
  }

  getById(id:number){ return this.http.get<MedicalHistory>(this.baseurl+'patient/'+id);}

  deleteByid(id:number){
    return this.http.delete(this.baseurl+id)
  }
  edit(std:MedicalHistory){
    return this.http.patch(this.baseurl+std._id,std)

  }
  add(std:MedicalHistory){
    return this.http.post<MedicalHistory>(this.baseurl,std)
    
  }
  constructor(public http:HttpClient) { 
    //     this.http.get<MedicalHistory>('http://localhost:8080/MedicalRecord').subscribe(a=>{
    //      console.log(a);
    // });
  }
}
