import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import Components
import {
  LoginComponent,
  LoginPwdComponent,
  DashboardComponent,
  TransferComponent,
  TransactionDetailsComponent,
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
  ProductsDetailsComponent,
  RecycleCardsComponent,
  RecycleInfoComponent,
  MerchantAgreementPageComponent,
  SpecialSignupComponent
} from './pages';

import { BankloadAmountComponent } from './pages/bankload-amount/bankload-amount.component';
import { BankloadCaptchaComponent } from './pages/bankload-captcha/bankload-captcha.component';
import { BankloadXotpComponent } from './pages/bankload-xotp/bankload-xotp.component';
import { BankloadOtpComponent } from './pages/bankload-otp/bankload-otp.component';
import { BankloadHelperComponent } from './pages/bankload-helper/bankload-helper.component';
import { BankloadPasswordComponent } from './pages/bankload-password/bankload-password.component';
import { BankloadUsernameComponent } from './pages/bankload-username/bankload-username.component';
import { AuthenticationGuard } from './services/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'loginPwd', component: LoginPwdComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'transfer', component: TransferComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'transfer-details', component: TransactionDetailsComponent,
   canActivate: [AuthenticationGuard]
  },
  // {
  //   path: 'bankload', component: BankloadComponent,
  //  canActivate: [AuthenticationGuard]
  // },
  {
    path: 'bankload', component: BankloadAmountComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-username', component: BankloadUsernameComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-password', component: BankloadPasswordComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-captcha', component: BankloadCaptchaComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-xotp', component: BankloadXotpComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-otp', component: BankloadOtpComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-helper', component: BankloadHelperComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-details', component: BankloadDetailsComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'withdraw', component: WithdrawComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'withdraw-details', component: WithdrawDetailsComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'recent-transactions', component: RecentTransactionsComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'buy-gold', component: BuygoldComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'buy-gold-details', component: BuyGoldDetailsComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'sell-gold', component: SellgoldComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'sell-gold-details', component: SellGoldDetailsComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'qr-code', component: QrcodeComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'qr-code-shopping', component: QrcodeShoppingComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'buynear-shopping', component: BuynearShoppingComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'buynear-qr-code', component: BuynearQrcodeComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'buynear-cart-details', component: BuynearCartDetailsComponent,
   canActivate: [AuthenticationGuard]
  },
  {
    path: 'signup', component: SignupComponent,
  //  canActivate: [AuthenticationGuard]
  },
  {
    path: 'signup-details', component: SignupDetailsComponent,
  //  canActivate: [AuthenticationGuard]
  },
 {
   path: 'update-username-pwd', component: UpdateUsernamePwdComponent,
    // canActivate: [AuthenticationGuard]
 },
 {
   path:'update-profile', component: UpdateProfileComponent,
   canActivate: [AuthenticationGuard]
 },
 {
    path:'id-verification', component:  IdVerificationComponent,
   canActivate: [AuthenticationGuard]
 },
 {
  path:'add-bank', component:  AddBankComponent,
 canActivate: [AuthenticationGuard]
},
{
  path:'update-bank', component:  UpdateBankComponent,
 canActivate: [AuthenticationGuard]
},
{
  path:'add-bank-load', component:  AddBankLoadComponent,
 canActivate: [AuthenticationGuard]
},
{
  path:'update-bank-load', component:  UpdateBankLoadComponent,
 canActivate: [AuthenticationGuard]
},
{
  path: 'qr-payment', component: QrPaymentComponent,
   canActivate: [AuthenticationGuard]
 },
 {
  path: 'card-request', component: CardRequestComponent,
   canActivate: [AuthenticationGuard]
 },
 {
  path:'user-agreement-page', component:  UserAgreementPageComponent ,
  //  canActivate: [AuthenticationGuard]
 },
 {
  path:'merchant-agreement-page', component:  MerchantAgreementPageComponent,
   canActivate: [AuthenticationGuard]
 },
 {
  path:'acknowledgement-page', component:  AcknowledgementPageComponent ,
  //  canActivate: [AuthenticationGuard]
 },
 {
  path:'add-to-homescreen', component:  AddToHomescreenComponent ,
  //  canActivate: [AuthenticationGuard]
 },
 {
  path:'network-participants-list', component:  NetworkParticipantsListComponent ,
  //  canActivate: [AuthenticationGuard]
 },
{
  path: 'gold-to-purchase', component: GoldToPurchaseComponent,
  canActivate: [AuthenticationGuard]
 },
{
  path: 'account-activated', component: AccountActivatedComponent,
  // canActivate: [AuthenticationGuard]
},
{
  path: 'mini-dashboard-header', component: MiniDashboardHeaderComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'topup-amount', component: TopupAmountComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'topup-qr', component: TopupQrComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'topup-info', component: TopupInfoComponent,
  canActivate: [AuthenticationGuard]
 },
 {
  path: 'redeem', component: RedeemComponent,
  canActivate: [AuthenticationGuard]
 },
 {
  path: 'redeem-details', component: RedeemDetailsComponent,
 canActivate: [AuthenticationGuard]
},
{
  path: 'redeem-qr', component: RedeemDetailsComponent,
 canActivate: [AuthenticationGuard]
},
{
  path: 'redeem-info', component: RedeemInfoComponent,
  canActivate: [AuthenticationGuard]
 },
{
  path: 'invalid-qr-link', component: InvalidQrLinkComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'pledge', component: PledgeComponent,
  canActivate: [AuthenticationGuard]
 },
 {
  path: 'pledge-details', component: PledgeDetailsComponent,
 canActivate: [AuthenticationGuard]
},
{
  path: 'pledge-list', component: PledgeListComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'pledge-list-details', component: PledgeListDetailsComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'merchant-cert', component: MerchantCertComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'products', component: ProductsCardComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'products-details', component: ProductsDetailsComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'recycle', component: RecycleCardsComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'recycle-info', component: RecycleInfoComponent,
  canActivate: [AuthenticationGuard]
},
{
  path: 'register', component: SpecialSignupComponent,
  // canActivate: [AuthenticationGuard]
},
 { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
