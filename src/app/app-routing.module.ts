import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { RemoveInvoicesComponent } from './remove-invoices/remove-invoices.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { UpdateInvoicesComponent } from './update-invoices/update-invoices.component';

const routes: Routes = [

  {
    path: 'addinvoice', component:AddInvoiceComponent
  },
  {
    path: 'remove/:idrem', component: RemoveInvoicesComponent
  },
  {
    path: 'update/:idupdate', component: UpdateInvoicesComponent
  },
  {
    path: 'liste', component:ListInvoiceComponent
  },
  {
    path: '**', component: NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
