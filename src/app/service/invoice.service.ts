
import { environment } from 'src/environments/environment';
import { invoices } from '../model/invoices';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url='http://localhost:3000/';

  invoicesUrl : string = "/api/invoices";

  u=environment.baseurl;


  

  constructor(private http:HttpClient ) { }


  addInvoice(data: any) {
    return this.http.post('http://localhost:3000/invoices', data)
  }
  fetchInvoice() {
    return this.http.get<invoices[]>('http://localhost:3000/invoices')
  }
  removeInvoice(id:any) {
    return this.http.delete('http://localhost:3000/invoices/'+id)
  }
  updateInvoice(data: any,id:any) {
    return this.http.put('http://localhost:3000/invoices/'+id, data)
  }
  getInvoiceById(id:any):Observable<invoices> {
    return this.http.get<invoices>('http://localhost:3000/invoices/'+id)
  }
}
