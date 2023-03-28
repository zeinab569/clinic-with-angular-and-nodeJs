import { Component } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_sevices/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent {
  employees:Employee[]=[]
  constructor(public employeeservices:EmployeeService){}

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
  
  ngOnInit(){
    this.employeeservices.getAll().subscribe(data=>{
        console.log(data);
        this.employees=data;
        
    })
  }
}
