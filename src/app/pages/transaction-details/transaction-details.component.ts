import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


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
    this.form = this.services.forms.transferForm || {}; // FIXME: Form is reset when page is reloaded.
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
   this.services.activetransaction = true;
   this.router.navigate(['dashboard']);
  }

  // TODO: Explore a more proper way to do this. (rwa)
  rebaseImageUrl(url: string): string {
    let newUrl: string = "";

    if (url) {
      const imageId: string = url.split("=")[1];
      newUrl = environment.proxyTarget + "/thumbnail?id=" + imageId;  
    }
    
    return newUrl;
  }
}
