import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import Components
import {
  LoginComponent,
  LoginPwdComponent,
  DashboardComponent,
  TransferComponent,
  TransactionDetailsComponent
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
  
  
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

