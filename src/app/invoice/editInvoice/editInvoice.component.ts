import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/_models/Invoice';
import { InvoiceService } from 'src/app/_sevices/invoiceService.service';

@Component({
  selector: 'app-editInvoice',
  templateUrl: './editInvoice.component.html',
  styleUrls: ['./editInvoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  invoice:Invoice=new Invoice(300,2,1,"",123,12,"",200,1)
  constructor(private invoiceservice:InvoiceService,private router:Router) { }

  ngOnInit() {
  }

  edit()
  {
    if(confirm("are you sure")){
      this.invoiceservice.editInvoiceRe_Amount(this.invoice).subscribe(data=>{
        console.log(data)
        this.router.navigateByUrl("invoiceList")
      } )
    }
  }

}
