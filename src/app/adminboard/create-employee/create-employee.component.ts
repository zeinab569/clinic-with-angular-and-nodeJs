import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  EmployeeForm:any;

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
 
  ngOnInit(): void
   {
    
    this.EmployeeForm=new FormGroup({
      _id:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      user_name:new FormControl('',[Validators.required,Validators.min(4)]),
      user_role:new FormControl(''),
      email:new FormControl('',[Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(14)]),
      phoneno:new FormControl(''),
      salary:new FormControl(''),
      gender:new FormControl(''),
      workHours:new FormControl('',[Validators.required,Validators.min(8)]),
      age:new FormControl('',[Validators.required,Validators.min(18)]),
      clinictId:new FormControl(''),
      dept_id:new FormControl(''),
      employeeImage:new FormControl(" "),
      
      })
   }
   fileChanged(event:any){

    const file =(event.target).files[0];
    this.EmployeeForm.patchValue({
      employeeImage:file
    });
    console.log(file);
    
    }

  onSubmit()
  {
    const formData=new FormData();
    formData.append('_id',this.EmployeeForm.value._id);
    formData.append('name',this.EmployeeForm.value.name)
    formData.append('user_name',this.EmployeeForm.value.user_name)
    formData.append('user_role',this.EmployeeForm.value.user_role);
    formData.append('password',this.EmployeeForm.value.password);
    formData.append('email',this.EmployeeForm.value.email);
    formData.append('salary',this.EmployeeForm.value.salary);
    formData.append('gender',this.EmployeeForm.value.gender);
    formData.append('workHours',this.EmployeeForm.value.workHours);
    formData.append('age',this.EmployeeForm.value.age);
    formData.append('phoneno',this.EmployeeForm.value.phoneno);
    formData.append('clinictId',this.EmployeeForm.value.clinictId);
    formData.append('dept_id',this.EmployeeForm.value.dept_id);
    formData.append('employeeImage',this.EmployeeForm.value.employeeImage);
    
  if(this.EmployeeForm.valid){
    this.employeeservice.createemployee(formData).subscribe(
      p=>{
        this.EmployeeForm.reset()
        this.router.navigateByUrl("/admin/listemployees")
        Swal.fire({
        
          position: 'center',
          icon: 'success',
          title: 'Added Successfully &#128077;',
          showConfirmButton: false,
         timer: 1500
        })

      }) 
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'please enter valid data!',
     // footer: '<a href="">Why do I have this issue?</a>'
    })
  }
      //  console.log(this.EmployeeForm.valid)
        
  }

}
