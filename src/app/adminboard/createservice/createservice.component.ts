import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/_models/service';
import { TheserviceService } from 'src/app/_sevices/theservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrls: ['./createservice.component.css']
})
export class CreateserviceComponent {
  serv:Service = new Service(0,"",0,"")

  constructor(public servservices:TheserviceService,public router:Router){}
  save(){
    
    this.servservices.add(this.serv).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/admin/listservices")
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Added Successfully &#128077;',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
