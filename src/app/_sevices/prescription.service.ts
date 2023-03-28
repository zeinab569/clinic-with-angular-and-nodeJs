import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prescrption } from '../_models/prescrption';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  baseUrl="http://localhost:8080/prescreption/";
  constructor(public http:HttpClient){ }
  getPrescriptionByDoctorId(id:number)
  {
    return this.http.get<Prescrption>(this.baseUrl+"doctor"+"/"+1);
  }
  edit(doc:Prescrption){
    return this.http.patch(this.baseUrl+doc._id,doc);
   }
}
