import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import Components
import {
  LoginComponent,
  LoginPwdComponent,
  DashboardComponent,
  TransferComponent,
  TransactionDetailsComponent,
  BankloadComponent,
  BankloadDetailsComponent,
  WithdrawComponent,
  WithdrawDetailsComponent
} from './pages';


export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "loginPwd",
    component: LoginPwdComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "transfer",
    component: TransferComponent
  },
  {
    path: "transfer-details",
    component: TransactionDetailsComponent
  },
  {
    path: "bankload",
    component: BankloadComponent
  },
  {
    path: "bankload-details",
    component: BankloadDetailsComponent
  },
  {
    path: "withdraw",
    component: WithdrawComponent
  },
  {
    path: "withdraw-details",
    component: WithdrawDetailsComponent
  },
  
  
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

