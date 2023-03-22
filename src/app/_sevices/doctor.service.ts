import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../_models/doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {


  baseUrl="http://localhost:8080/doctor/";

  constructor(public http:HttpClient) {
    // this.http.get<Doctor>('http://localhost:8080/doctor').subscribe(a=>{
    //      console.log(a);
    // });
  }
  
    getAll(){
      return this.http.get<Doctor[]>(this.baseUrl);//don't forget to transfer return data to array
     
    }
  
    deleteAll(){return this.http.delete(this.baseUrl);}
  
    getById(){ return this.http.get<Doctor>(this.baseUrl+62);}
  
    create(data:any){ return this.http.post(this.baseUrl,data);}
  
    update(id:any,data:any){ return this.http.put(`${this.baseUrl}/${id}`,data);}
  
    deleteById(id:any){return this.http.delete(`${this.baseUrl}/${id}`);}
    // 
    findBySalary(fullName:any){return this.http.get<Doctor[]>(this.baseUrl+'?'+fullName+'='+"455")}
  
}
