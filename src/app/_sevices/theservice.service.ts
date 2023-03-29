import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../_models/service';

@Injectable({
  providedIn: 'root'
})
export class TheserviceService {

  baseurl="http://localhost:8080/Service/";
  

  getAll(){
    return this.http.get<Service[]>(this.baseurl)
  }
  getByid(id:number){
    return this.http.get<Service>(this.baseurl+id)

  }
  deleteByid(id:number){
    return this.http.delete(this.baseurl+id)
  }
  edit(std:Service){
    return this.http.put(this.baseurl+std._id,std)

  }
  add(std:Service){
    return this.http.post<Service>(this.baseurl,std)
    
  }
  constructor(public http:HttpClient) { }
}
