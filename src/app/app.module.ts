import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { FormInvoiceComponent } from './form-invoice/form-invoice.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LogoComponent } from './shared/logo/logo.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UpdateInvoicesComponent } from './update-invoices/update-invoices.component';
import { RemoveInvoicesComponent } from './remove-invoices/remove-invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    ListInvoiceComponent,
    AddInvoiceComponent,
    FormInvoiceComponent,
    NavComponent,
    NotfoundComponent,
    LogoComponent,
    FooterComponent,
    UpdateInvoicesComponent,
    RemoveInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
