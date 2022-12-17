import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { invoices } from '../model/invoices';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-update-invoices',
  templateUrl: './update-invoices.component.html',
  styleUrls: ['./update-invoices.component.css']
})
export class UpdateInvoicesComponent implements OnInit {
  p=new invoices();
  id:any;

  constructor(private s:InvoiceService,
    private ac:ActivatedRoute,
    private router:Router ) { }

    ngOnInit(): void {
      this.id=this.ac.snapshot.params['idupdate'];
      this.s.getInvoiceById(this.id).subscribe(
        (d)=>{
          console.log('next')
          this.p=d;
        },
        (error)=>{
          switch (error.status){
          case 404: console.log('notfound');
          this.router.navigate(['notfound'])
          break;
          }
  
        }
        ,
          ()=>{
            console.log('comp')
          }
      )
    }
  updateP(f:any){
  this.s.updateInvoice(this.id,f).subscribe(
    ()=>{
      //console.log('updated')
      this.router.navigate(['products'])
    }
  );
  }
  }