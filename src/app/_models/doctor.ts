export class Doctor {
    [x: string]: any;
    constructor(public _id:Number
        ,public fullName:string
        ,public userName:String
        ,public email:String
        ,public phoneNumber:String
        ,public gender:String
        
        ,public password:String
        ,public doctorImage:String
        ,public age:number
        ,public salary:number
        ,public user_role:string
        ,public departmentId:Number
        ,public max_appoints:number
        ,public doctor_start:number
        ,public doctor_end:number
        ,public prescreption:number
        ,public city:String
        ,public appointments:any
        ,public patientid:any
        ,public clinicId:any
        ,public street:String
        ,public building:Number
        ){}

}
