import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_sevices/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent  {
  employee:Employee=new Employee(0,"","","","","","",0,"",0,"",0,0,0,"")
  
  constructor(public employeeservice:EmployeeService,public router:Router) { }
  save(){
    
    this.employeeservice.add(this.employee).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/admin/listemployees")
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
