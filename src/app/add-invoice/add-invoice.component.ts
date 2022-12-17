import { Component, OnInit } from '@angular/core';
import { invoices } from '../model/invoices';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
invoice!:invoices;
  constructor(private s:InvoiceService) { }

  ngOnInit(): void {
    this.invoice=new invoices();
  }
  showForm(t:any){
    console.log(t)
  }
  addI(f:any){
    this.s.addInvoice(f).subscribe(
      ()=>{
        console.log('added')
      }
    );
  }
  save(){
    this.s.addInvoice(this.invoice).subscribe();
  }

}
