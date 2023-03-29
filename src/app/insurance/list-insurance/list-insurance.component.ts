import { Component } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { Insurance } from 'src/app/_models/insurance';
import { InsuranceService } from 'src/app/_sevices/insurance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-insurance',
  templateUrl: './list-insurance.component.html',
  styleUrls: ['./list-insurance.component.css']
})
export class ListInsuranceComponent {



  insurances:Insurance[]=[];
constructor(public insurance:InsuranceService,public Route:Router)
{
}
ngOnInit(){

  this.insurance.getAll().subscribe(data=>{
    this.insurances=data;
  })
}
Delete(id:number){
  if(confirm('confirm are you sure?')){
  this.insurance.deleteById(id).subscribe(a=>{
    console.log(a);
    this.alertWithSuccess();
    for (let i = 0; i < this.insurances.length; i++) {
      if(id == this.insurances[i]._id){
        this.insurances.splice(i,1);
        break;
      }
    }


  })


}



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

