import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../_models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  baseurl='http://localhost:8081/medicine/';

  constructor(public http:HttpClient){


 }


 getAll(){
   return this.http.get<Medicine[]>(this.baseurl);
 }
 add(med:Medicine){
 return this.http.post<Medicine>(this.baseurl,med);
 }
 getById(id:number){
  return  this.http.get<Medicine>(this.baseurl+id);

 }

 deleteById(id:number){
   return this.http.delete<Medicine>(this.baseurl+id)
    }
    edit(_id:Number,med:Medicine){
     return  this.http.put(this.baseurl+med._id,med)

   }
}
