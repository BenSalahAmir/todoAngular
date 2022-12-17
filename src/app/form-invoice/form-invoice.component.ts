import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { invoices } from '../model/invoices';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-form-invoice',
  templateUrl: './form-invoice.component.html',
  styleUrls: ['./form-invoice.component.css']
})
export class FormInvoiceComponent implements OnInit {
  Invoice:any=[];
  show=true;
  constructor(private s:InvoiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  addElementToTab(element:any){
    this.Invoice.push(element)
    }
    changeStatus(){
this.show=!this.show
    }

}
