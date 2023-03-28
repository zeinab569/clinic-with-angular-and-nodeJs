import { Time } from "@angular/common";

export class Prescrption {
    constructor( public _id:Number,
        public clinic_id:Number,
        public creationDate:any,
        public medicine:any,
        public dosage:string,
        public patient_id:any,
        public doctor_id:any,
        public dept_id:any)
    {

    }
}