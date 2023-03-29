import { Component } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { Medicine } from 'src/app/_models/medicine';
import { MedicineService } from 'src/app/_sevices/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css']
})
export class ListMedicineComponent {

  medicines:Medicine[]=[];
  constructor(public medicineService:MedicineService,public Route:Router)
  {


  }
  ngOnInit(){

    this.medicineService.getAll().subscribe(data=>{
      this.medicines=data;
    })
  }
  Delete(id:number){
    if(confirm('confirm are you sure?')){
    this.medicineService.deleteById(id).subscribe(a=>{
      console.log(a);
      this.alertWithSuccess();

    })
    this.Route.navigateByUrl('/medicine');

  }

  // this.Route.navigateByUrl('/medicine');

  }
  alertWithSuccess(){
    Swal.fire('thank you ..', 'item Deleted succesfully!', 'success')
    

  }
 
  downloadAsPDF(){
    var data = document.getElementById("pdf")!;
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });

  }



}
