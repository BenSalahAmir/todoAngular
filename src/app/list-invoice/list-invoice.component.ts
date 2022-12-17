import { Component, OnInit } from '@angular/core';
import { invoices } from '../model/invoices';
import { InvoiceService } from '../service/invoice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {
  list:any;
  show=false;
  prod!:invoices;
  constructor(private s:InvoiceService) { }

  ngOnInit(): void {
    this.s.fetchInvoice().subscribe(
      (result: any)=>{
        this.list=result
        console.log(result)
      }
      
    );
  
    }
    update(p:any){
      this.show=true
  this.prod=p
    }

}
