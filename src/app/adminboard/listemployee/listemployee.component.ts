import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_sevices/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent {
  emps:any;
  
  
  employees:Employee[]=[]
  employee:Employee=new Employee(0,"","","","","","",0,"",0,"",0,0,0,"")
  flag=false;

  constructor(public employeeservices:EmployeeService,public router:Router){}


  delete(id:number){
    if(confirm("are you sure")){
      this.employeeservices.deleteByid(id).subscribe(a=>{
        console.log(a)
        for (let i = 0; i < this.employees.length; i++) {
          if(id == this.employees[i]._id){
            this.employees.splice(i,1);
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
  thedite(employee:Employee){
    this.router.navigateByUrl("/admin/updateemployees")
    return this.E2=employee;
  }

  ngOnInit(){
  //   this.employeeservices.getAll().subscribe(data=>{
  //       console.log(data);
  //       this.employees=data;
        
  //   })
  // }


  this.employeeservices.getAllEmployees().subscribe(
    d=>{
      this.emps=d
     this.emps.forEach((emp:Employee) => {
        // emp.employeeImage=Buffer.from(emp.employeeImage).toString()
      });
      console.log(d)
    }
  )

  }
}