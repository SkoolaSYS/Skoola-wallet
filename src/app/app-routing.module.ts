import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import Components
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
  BuynearCartDetailsComponent
} from './pages';
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
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'transfer', component: TransferComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'transfer-details', component: TransactionDetailsComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload', component: BankloadComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'bankload-details', component: BankloadDetailsComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'withdraw', component: WithdrawComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'withdraw-details', component: WithdrawDetailsComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'recent-transactions', component: RecentTransactionsComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'buy-gold', component: BuygoldComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'buy-gold-details', component: BuyGoldDetailsComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'sell-gold', component: SellgoldComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'sell-gold-details', component: SellGoldDetailsComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'qr-code', component: QrcodeComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'qr-code-shopping', component: QrcodeShoppingComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'buynear-shopping', component: BuynearShoppingComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'buynear-qr-code', component: BuynearQrcodeComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'buynear-cart-details', component: BuynearCartDetailsComponent,
    // canActivate: [AuthenticationGuard]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
