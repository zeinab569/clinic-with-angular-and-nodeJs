import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_sevices/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editeemployee',
  templateUrl: './editeemployee.component.html',
  styleUrls: ['./editeemployee.component.css']
})
export class EditeemployeeComponent {
  employee:Employee=new Employee(0,"","","","","","",0,"",0,"",0,0,0,"")
  
  constructor(public employeeservice:EmployeeService,public router:Router) { }

  
  update(employee:Employee){
    if(confirm("are you sure")){
    this.employeeservice.edit(employee).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/admin/listemployees")
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'updated Successfully &#128077;',
      showConfirmButton: false,
      timer: 1500
    })
  }}

}
