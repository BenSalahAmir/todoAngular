import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-remove-invoices',
  templateUrl: './remove-invoices.component.html',
  styleUrls: ['./remove-invoices.component.css']
})
export class RemoveInvoicesComponent implements OnInit {
  id:any;
  constructor(private s:InvoiceService,
    private ac:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idrem']
    this.s.removeInvoice(this.id).subscribe(
      ()=>{
        this.router.navigate(['liste'])
      }
    );
  }

}
