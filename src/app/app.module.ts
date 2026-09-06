import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angular2-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { NgPopupsModule } from 'ng-popups';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from "@angular/material/core";

import {
  LoginComponent,
  LoginPwdComponent,
  DashboardComponent,
  TransferComponent,
  TransactionDetailsComponent,
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
  IdVerificationComponent,
  AddBankComponent,
  UpdateBankComponent,
  QrPaymentComponent,
  CardRequestComponent,
  UserAgreementPageComponent,
  AcknowledgementPageComponent,
  AddBankLoadComponent,
  UpdateBankLoadComponent,
  AddToHomescreenComponent,
  NetworkParticipantsListComponent,
  GoldToPurchaseComponent,
  AccountActivatedComponent,
  MiniDashboardHeaderComponent,
  TopupAmountComponent,
  TopupInfoComponent,
  TopupQrComponent,
  InvalidQrLinkComponent,
  RedeemComponent,
  RedeemDetailsComponent,
  RedeemInfoComponent,
  PledgeComponent,
  PledgeDetailsComponent,
  PledgeListComponent,
  PledgeListDetailsComponent,
  MerchantCertComponent,
  ProductsCardComponent,
  ProductsDetailsComponent,
  RecycleCardsComponent,
  RecycleInfoComponent,
  MerchantAgreementPageComponent,
  SpecialSignupComponent,
  DirectComponent,
} from './pages';

import {
  DashboardHeaderComponent,
  TransactionViewComponent,
  TransferRecipientComponent,
  OtpcardComponent,
  WithdrawBankDetailsComponent,
  BuyGoldDetailsViewComponent,
  BuygoldTopViewComponent,
  SellGoldDetailsViewComponent,
  SellgoldTopViewComponent,
  ShoppingProductsComponent,
  qrViewComponent,
  BuynearTopViewComponent,
  MatsidenavComponent,
  TermsConditionComponent,
  SplitHeaderComponent,
  RedeemDetailsViewComponent,
  PledgeDetailsViewComponent,
  PledgeListDetailsViewComponent,
  MerchantTermsConditionComponent,
  ReEntryHeaderComponent
} from './components';

import { Services } from 'src/app/services/service';
import { BankloadAmountComponent } from './pages/bankload-amount/bankload-amount.component';
import { BankloadFpxComponent } from './pages/bankload-fpx/bankload-fpx.component';
import { BankloadUsernameComponent } from './pages/bankload-username/bankload-username.component';
import { BankloadPasswordComponent } from './pages/bankload-password/bankload-password.component';
import { BankloadXotpComponent } from './pages/bankload-xotp/bankload-xotp.component';
import { BankloadOtpComponent } from './pages/bankload-otp/bankload-otp.component';
import { BankloadHelperComponent } from './pages/bankload-helper/bankload-helper.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { BankloadCaptchaComponent } from './pages/bankload-captcha/bankload-captcha.component';
import { SignupMayaComponent } from './projects/';
import { PreSignupComponent } from './projects/maya/pre-signup/pre-signup.component';
import { MayaService } from './projects/';
import { SubscribeComponent } from './projects/maya/subscribe/subscribe.component';
import { MenuComponent } from './projects/maya/menu/menu.component';
import { OrderComponent } from './projects/maya/order/order.component';
import { CanteenComponent } from './projects/maya/canteen/canteen.component';
import { CurrencyFormatDirective } from './projects/maya/currency-format.directive';
import { IndirectComponent } from './pages/indirect/indirect.component';
import { DirectpageComponent } from './page/directpage/directpage.component';
import { ReEntryDashboardComponent } from './projects/re-entry/dashboard/re-entry-dashboard.component';
import { ReEntryLoginComponent } from './projects/re-entry/login/re-entry-login.component';
import { KopenComponent } from './projects/re-entry/kopen/kopen.component';
import { SchoolDashboardComponent } from './projects/maya/school-dashboard/school-dashboard.component';
import { SkoolaLoginComponent } from './projects/maya/skoola-login/skoola-login.component';


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
    IdVerificationComponent,
    AddBankComponent,
    UpdateBankComponent,
    QrPaymentComponent,
    CardRequestComponent,
    UserAgreementPageComponent,
    AcknowledgementPageComponent,
    AddBankLoadComponent,
    UpdateBankLoadComponent,
    AddToHomescreenComponent,
    NetworkParticipantsListComponent,
    GoldToPurchaseComponent,
    AccountActivatedComponent,
    MiniDashboardHeaderComponent,
    TopupAmountComponent,
    TopupQrComponent,
    TopupInfoComponent,
    InvalidQrLinkComponent,
    RedeemComponent,
    RedeemDetailsComponent,
    RedeemInfoComponent,
    PledgeComponent,
    PledgeDetailsComponent,
    PledgeListComponent,
    PledgeListDetailsComponent,
    MerchantCertComponent,
    ProductsCardComponent,
    UpdateBankLoadComponent,
    BankloadAmountComponent,
    BankloadUsernameComponent,
    BankloadPasswordComponent,
    BankloadXotpComponent,
    BankloadOtpComponent,
    BankloadFpxComponent,
    // BankloadApprovalComponent,
    BankloadHelperComponent,
    BankloadCaptchaComponent,
    RedeemInfoComponent,
    ProductsDetailsComponent,
    RecycleCardsComponent,
    RecycleInfoComponent,
    MerchantAgreementPageComponent,
    SpecialSignupComponent,
    SubscribeComponent,
    MenuComponent,
    SignupMayaComponent,
    PreSignupComponent,
    OrderComponent,
    CanteenComponent,
    CurrencyFormatDirective,
    ReEntryDashboardComponent,
    ReEntryLoginComponent,
    KopenComponent,
    // components
    DashboardHeaderComponent,
    TransactionViewComponent,
    TransferRecipientComponent,
    OtpcardComponent,
    WithdrawBankDetailsComponent,
    BuyGoldDetailsViewComponent,
    BuygoldTopViewComponent,
    SellGoldDetailsViewComponent,
    SellgoldTopViewComponent,
    ShoppingProductsComponent,
    qrViewComponent,
    BuynearTopViewComponent,
    MatsidenavComponent,
    CardRequestComponent,
    TermsConditionComponent,
    SplitHeaderComponent,
    RedeemDetailsViewComponent,
    PledgeDetailsViewComponent,
    PledgeListDetailsViewComponent,
    AlertDialogComponent,
    MerchantTermsConditionComponent,
    DirectComponent,
    IndirectComponent,
    ReEntryHeaderComponent,

    // pipes
    SafeHtmlPipe,
    SafeUrlPipe,
    IndirectComponent,
    DirectpageComponent,
    SchoolDashboardComponent,
    SkoolaLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    FormsModule, // Add FormsModule
    MatInputModule, // Add MatInputModule
    MatDatepickerModule, // Add MatDatepickerModule
    MatFormFieldModule, // Add MatFormFieldModule
    MatNativeDateModule, // Add MatNativeDateModule
    MatTabsModule,
    MatRadioModule,
    MatTooltipModule,
    MatCardModule,
    NgbModule,
    QRCodeModule,
    Ng2ImgMaxModule, 
    HttpClientModule, 
    QRCodeModule, 
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
    NgxSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [
    Services, 
    { provide: MAT_DIALOG_DATA, useValue: [] },
    [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true, disableClose: true, width: "90%" }},
    MatNativeDateModule,
    MayaService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent]
})
export class AppModule { }
