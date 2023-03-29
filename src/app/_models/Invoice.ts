export class Invoice {
    constructor(public _id:number,
        public employeeID:number,
        public patientID:any,
        public date:string,
        public amount:number,
        public remainingAmount:number,
        public paymentWay:string,
        public appointmentID:number,
        public serviceID:number ){}
        
}
