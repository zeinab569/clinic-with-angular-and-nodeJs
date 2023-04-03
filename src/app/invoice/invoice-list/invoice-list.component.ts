import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Invoice}from 'src/app/_models/Invoice'
import { InvoiceService } from 'src/app/_sevices/invoiceService.service';
import { AddInvoiceComponent } from '../add-invoice/add-invoice.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoiceList:Invoice[]=[];
  invoice:Invoice=new Invoice(300,2,1,"",123,12,"",200,1)
  baseUrl="http://localhost:8080/invoices/";
  constructor(private invoiceservice:InvoiceService,private router: Router,private  dialog : MatDialog) {

  }

  ngOnInit() {
    this.invoiceservice.getAllInvoices().subscribe(invoices=>
      {this.invoiceList=invoices
        console.log(this.invoiceList)
      });
  }
  onSubmitData(data:Invoice)
  {
    this.invoiceservice.addInvoice(data).subscribe((inv)=>{
      console.log(inv)
      this.router.navigate([''])
    })
  }

  add()
  {
    
  //      const dialogRef=this.dialog.open(AddInvoiceComponent);  
  // dialogRef.componentInstance.onSubmit.subscribe((data: Invoice) => {
  //       console.log("from parent")
  //       console.log(data)
  //       this.onSubmitData(data);
  //       dialogRef.close();
  //     })

  this.router.navigateByUrl("addInvoice")

     }

     edit(id:number)
     {
      this.router.navigateByUrl("editInvoice")
     }
     delete(id:number)
     {
      console.log(this.invoice)
      if(confirm("Are you sure")){
      this.invoiceservice.deleteInvoiceById(id).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl("invoiceList")
      })
       }
      }

 

}
