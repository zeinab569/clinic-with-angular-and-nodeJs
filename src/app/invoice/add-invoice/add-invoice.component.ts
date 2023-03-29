import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/_models/Invoice';
import { InvoiceService } from 'src/app/_sevices/invoiceService.service';


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  
  invoice:Invoice=new Invoice(300,2,1,"",123,12,"cash",200,1)
  constructor(private invoiceService:InvoiceService,private router:Router) { }

  ngOnInit() {
 
  }

  addINV()
  {console.log(this.invoice)
    this.invoiceService.addInvoice(this.invoice).subscribe((inv)=>{
      console.log(inv)
      this.router.navigateByUrl("invoiceList")
    })
    
  }
 
 
}
