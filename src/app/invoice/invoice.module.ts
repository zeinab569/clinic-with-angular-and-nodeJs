import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './editInvoice/editInvoice.component';
import {FormsModule}  from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InvoiceListComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ],
  exports:[
    InvoiceListComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ]
})
export class InvoiceModule { }
