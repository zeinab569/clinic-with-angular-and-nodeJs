import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prescrption } from '../_models/prescrption';
import {switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})

export class PrescriptionService {
  baseUrl="http://localhost:8080/prescreption"
  constructor( public http:HttpClient) {
   // http.get<Prescrption>("http://localhost:8080/prescreption").subscribe(prescriptionData=>console.log(prescriptionData))
   }
  getAllPrescription()
  {
     return this.http.get<Prescrption>(this.baseUrl);
  }
  createPrescription(prescrption:any)
  {
    return this.http.post<Prescrption>(this.baseUrl,prescrption)
  }
  getPrescriptionById(id:number)
  {
    return this.http.get<Prescrption>(this.baseUrl+"/"+id);
  }
  getPrescriptionByDoctorId(id:number)
  {
    return this.http.get<Prescrption>(this.baseUrl+"/doctor"+"/"+id);
  }
  getPrescriptionByPateintId(id:number)
  {
    return this.http.get<Prescrption>(this.baseUrl+"/patient"+"/"+id);
  }
  deletePrescription(id:number):Observable<Prescrption>
  {
    return this.http.delete(this.baseUrl+"/"+id).pipe(
      switchMap(() =>this.getAllPrescription())
    );
  }
  updatePrescrption(id:number,prescription:any)
  {
    return this.http.patch<Prescrption>(this.baseUrl+"/"+id,prescription);
  }
}