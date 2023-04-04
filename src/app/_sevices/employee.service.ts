import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl="http://localhost:8080/employee/";
  

  getAll(){
    return this.http.get<Employee[]>(this.baseurl)
  }
  getByid(id:number){
    return this.http.get<Employee>(this.baseurl+id)

  }
  deleteByid(id:number){
    return this.http.delete(this.baseurl+id)
  }
  edit(emp:Employee){
    return this.http.put(this.baseurl+emp._id,emp)

  }
  add(emp:Employee){
    return this.http.post<Employee>(this.baseurl,emp)
    
  }
  createemployee(employee:any)
   {
     return this.http.post<Employee>(this.baseurl,employee)
   }
   getAllEmployees()
   {
      return this.http.get<Employee>(this.baseurl);
   }
  constructor(public http:HttpClient) { }
}
