import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


  
  import { MatSidenavModule } from '@angular/material/sidenav';
  import { MatButtonModule } from '@angular/material/button';
  import { MatIconModule } from '@angular/material/icon';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatListModule } from '@angular/material/list';
  import { MatTabsModule } from '@angular/material/tabs';

import {
  LoginComponent,
  LoginPwdComponent,
  DashboardComponent,
  TransferComponent,
  TransactionDetailsComponent,
  BankloadComponent,
  BankloadDetailsComponent,
  WithdrawComponent,
  WithdrawDetailsComponent,
  RecentTransactionsComponent
} from "./pages";

import { 
  DashboardHeaderComponent,
  TransactionViewComponent,
  TransferRecipientComponent,
  OtpcardComponent,
  BankDetailsComponent,
  WithdrawBankDetailsComponent,
} from './components';


import { Services } from 'src/app/pages/services/service';
import {  } from './components/withdraw-bank-details/withdraw-bank-details.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPwdComponent,
    DashboardComponent,
    TransferComponent,
    TransactionDetailsComponent,
    BankloadComponent,
    BankloadDetailsComponent,
    WithdrawComponent,
    WithdrawDetailsComponent,
    RecentTransactionsComponent,

    //components
    DashboardHeaderComponent,
    TransactionViewComponent,
    TransferRecipientComponent,
    OtpcardComponent,
    BankDetailsComponent,
    WithdrawBankDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: "always" }),
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
