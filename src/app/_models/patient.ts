export class Patient {
    constructor(
        public _id:number,
        public firstName:string,
        public lastName:string,
        public age:number,
        public gender:string, 
        public address:{city:string,street:string,building:number},
        public email:string,
        public insuranceNumber:string,
        public insuranceCompany:number,
        public phoneNumber:string,
        public img:any
        )
     {}
}
