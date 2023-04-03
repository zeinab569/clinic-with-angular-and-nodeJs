import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insurance } from '../_models/insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  baseurl='http://localhost:8081/insuranceComp/';

  constructor(public http:HttpClient){

    // this.http.get<Medicine>('http://localhost:8081/medicine').subscribe(a=>{
    //   console.log(a)

   // })
 }


 getAll(){
   return this.http.get<Insurance[]>(this.baseurl);
 }
 add(Insu:Insurance){
 return this.http.post<Insurance>(this.baseurl,Insu);
 }
 getById(id:number){
  return  this.http.get<Insurance>(this.baseurl+id);

 }

 deleteById(id:number){
   return this.http.delete<Insurance>(this.baseurl+id)
    }
  //   edit(id:Number,Insu:Insurance){
  //    return  this.http.put(this.baseurl+Insu._id,Insu)

  //  }

  edit(Insu:Insurance){
    return  this.http.put(this.baseurl+Insu._id,Insu)

  }
}
