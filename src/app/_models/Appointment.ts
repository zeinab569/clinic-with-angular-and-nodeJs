export class Appointment {
    constructor
    (
    public _id:number,
   public employeeID:number,
   public patientID:number,
   public departmentID:number,
   public doctorID:number,
   public date:string,
   public time:string,
   public status:string
    )
    {}
    
}
