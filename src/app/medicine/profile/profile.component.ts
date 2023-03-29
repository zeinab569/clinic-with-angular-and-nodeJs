import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_sevices/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  pharmaciats:Employee[]=[];
  ph:Employee=new Employee(0,"","","","","","",0,"",0,"",0,0,0,"");

  constructor(public phar:EmployeeService,public activatedroute:ActivatedRoute , public router:Router){


  }

  ngOnInit(){

    this.activatedroute.params.subscribe(item=>{
      this.phar.getByid(this.ph._id).subscribe(data=>{
        this.ph=data;
        console.log(data);
      })
    }) 
  }
  Save(){

    this.phar.add(this.ph).subscribe((result)=>{
      console.log(result,"profile updated sucessfully");
      this.router.navigateByUrl('/medicine');
  
  });

  }

}
