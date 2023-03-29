import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/Invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseUrl="http://localhost:8080/invoices/";

  url="http://localhost:8080/invoiceRe_Amount/"
 


getAllInvoices(){
  
  return this.httpClient.get<Invoice[]>(this.baseUrl)
}

addInvoice(invoice:Invoice )
{
 return this.httpClient.post<Invoice>("http://localhost:8080/invoice/",invoice)
}

editInvoiceRe_Amount(newInvoice:Invoice)
{
  return this.httpClient.put(this.url+newInvoice._id,newInvoice)
}

deleteInvoiceById(id:number)
{
  return this.httpClient.delete("http://localhost:8080/deleteInvoice/"+id)
}

constructor(private httpClient:HttpClient) { }
}
