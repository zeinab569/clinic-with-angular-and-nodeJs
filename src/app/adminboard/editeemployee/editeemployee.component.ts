import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_sevices/employee.service';

@Component({
  selector: 'app-editeemployee',
  templateUrl: './editeemployee.component.html',
  styleUrls: ['./editeemployee.component.css']
})
export class EditeemployeeComponent {
  employee:Employee=new Employee(0,"","","","","","",0,"",0,"",0,0,0,"")
  
  constructor(public employeeservice:EmployeeService,public router:Router) { }
  update(){
    if(confirm("are you sure")){
    this.employeeservice.edit(this.employee).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/listemployees")
    } )
  }}

}
