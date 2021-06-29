import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { NgPopupsModule } from 'ng-popups';

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
  RecentTransactionsComponent,
  BuygoldComponent,
  BuyGoldDetailsComponent,
  SellgoldComponent,
  SellGoldDetailsComponent,
  QrcodeComponent,
  QrcodeShoppingComponent,
  BuynearShoppingComponent,
  BuynearQrcodeComponent,
  BuynearCartDetailsComponent,
  SignupComponent,
  SignupDetailsComponent,  
  UpdateUsernamePwdComponent,
  UpdateProfileComponent,
  CimbBankloadComponent,
  IdVerificationComponent,
  QrPaymentComponent
} from './pages';

import {
  DashboardHeaderComponent,
  TransactionViewComponent,
  TransferRecipientComponent,
  OtpcardComponent,
  BankDetailsComponent,
  WithdrawBankDetailsComponent,
  BuyGoldDetailsViewComponent,
  BuygoldTopViewComponent,
  SellGoldDetailsViewComponent,
  SellgoldTopViewComponent,
  ShoppingProductsComponent,
  qrViewComponent,
  BuynearTopViewComponent,
  OtpbankComponent,
  CimbbankDetailsComponent,
  CimbbankTransactionComponent

} from './components';

import { Services } from 'src/app/services/service';


@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
 
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
 
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

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
    BuygoldComponent,
    BuyGoldDetailsComponent,
    SellgoldComponent,
    SellGoldDetailsComponent,
    QrcodeComponent,
    QrcodeShoppingComponent,
    BuynearShoppingComponent,
    BuynearQrcodeComponent,
    BuynearCartDetailsComponent,
    SignupComponent,
    SignupDetailsComponent,
    UpdateUsernamePwdComponent,
    UpdateProfileComponent,
    CimbBankloadComponent,
    IdVerificationComponent,
    QrPaymentComponent,

    // components
    DashboardHeaderComponent,
    TransactionViewComponent,
    TransferRecipientComponent,
    OtpcardComponent,
    OtpbankComponent,
    BankDetailsComponent,
    WithdrawBankDetailsComponent,
    BuyGoldDetailsViewComponent,
    BuygoldTopViewComponent,
    SellGoldDetailsViewComponent,
    SellgoldTopViewComponent,
    ShoppingProductsComponent,
    qrViewComponent,
    BuynearTopViewComponent,
    OtpbankComponent,
    CimbbankDetailsComponent,
    CimbbankTransactionComponent,

    // pipes
    SafeHtmlPipe,
    SafeUrlPipe,
    
   
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
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
    NgPopupsModule.forRoot(
      // {
      //   theme: 'default', // available themes: 'default' | 'material' | 'dark'
      //   okButtonText: 'Yes',
      //   cancelButtonText: 'No',
      //   color: '#8030c3',
      //   titles: {
      //     alert: 'Danger!',
      //     confirm: 'Confirmation',
      //     prompt: 'Website asks...'
      //   }
      // }
    ),
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
