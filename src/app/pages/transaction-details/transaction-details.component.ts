import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html'
})
export class TransactionDetailsComponent implements OnInit {
  form: any;
  currentUser: any;
  receiver: any;
  constructor(private services: Services, private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.currentUser = await this.services.currentUser;
    this.form = this.services.forms.transferForm || {};
    this.receiver = this.form.selectedMember;
  }
  async otpSubmit(otp: string) {
   await this.services.paymentTransfer({
    toMemberId: this.form.toMemberId,
    toMemberPrincipal: this.form.toMemberPrincipal,
    amount: this.form.amount,
    transactionPassword: otp,
    description: this.form.description,
   }).toPromise();
   this.router.navigate(['dashboard']);
  }
}