import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html'
})
export class TransactionDetailsComponent implements OnInit {
  form: any;
  currentUser: any;
  receiver: any;
  senderImg: string = "";
  receiverImg: string = "";

  constructor(private services: Services, private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.currentUser = await this.services.currentUser;
    this.form = this.services.forms.transferForm || {}; // FIXME: Form is reset when page is reloaded.
    //this.receiver = this.form.selectedMember;
    this.receiver = await this.services.receiver;

    if (this.currentUser.images && this.currentUser.images.length != 3)
      this.senderImg = Utility.rebaseImageUrl(this.currentUser.images[0].thumbnailUrl);
    if (this.receiver.images && this.receiver.images.length != 3)
      this.receiverImg = Utility.rebaseImageUrl(this.receiver.images[0].thumbnailUrl);
  }
  
  async otpSubmit(otp: string) {
   await this.services.paymentTransfer({
    toMemberId: this.receiver.id,           // this.form.toMemberId,
    toMemberPrincipal: this.receiver.name,  // this.form.toMemberPrincipal,
    amount: this.form.amount,
    transactionPassword: otp,
    description: this.form.description,
   }).toPromise();
   this.services.activetransaction = true;
   this.router.navigate(['dashboard']);
  }
}
