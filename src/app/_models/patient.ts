export class Patient {
    constructor(
        public _id:number,
        public firstName:string,
        public lastName:string,
        public age:Number,
        public email:string,
        public gender:string,
        public address:any,
        public insuranceNumber:string,
        public phoneNumber:string,
        public appointmentId:any,
        public prescriptionId:number,
        public healthRecordId:number,
        public clinicId:number,
    ){}
}
