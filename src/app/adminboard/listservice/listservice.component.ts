import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/_models/service';
import { TheserviceService } from 'src/app/_sevices/theservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listservice',
  templateUrl: './listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent {
  theservices:Service[]=[]
  serv:Service=new Service(0,"",0,"")
  flag=false;

  constructor(public servservices:TheserviceService,public router:Router){}


  delete(id:number){
    if(confirm("are you sure")){
      this.servservices.deleteByid(id).subscribe(a=>{
        console.log(a)
        for (let i = 0; i < this.theservices.length; i++) {
          if(id == this.theservices[i]._id){
            this.theservices.splice(i,1);
            break;
          }
        }
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'deleted Successfully &#128077;',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  
public  E2:any;
  thedite(serve:Service){
    this.router.navigateByUrl("/admin/updateservices")
    return this.E2=serve;
  }

  ngOnInit(){
    this.servservices.getAll().subscribe(data=>{
        console.log(data);
        this.theservices=data;
        
    })
  }

}
