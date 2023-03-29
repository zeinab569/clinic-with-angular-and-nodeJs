import { Time } from "@angular/common";

export class Prescrption {
    constructor( 
        public _id:number,
        public creationDate:any,
        public medicine:any,
        public dosage:string,
        public patient_id:any,
        public doctor_id:any,
        public clinic_id:number,
        public dept_id:any)
    {

    }
}