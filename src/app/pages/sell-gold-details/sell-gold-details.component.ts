import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-sell-gold-details',
  templateUrl: './sell-gold-details.component.html'
})
export class SellGoldDetailsComponent implements OnInit {
  currentUser: any;
  senderImg: string = "";
  goldAmount;
  goldPrice;
  goldReference;
  goldSplit;
  feeCharge;
  constructor(
    private services:Services,
    private router:Router,
    private ngPopups: NgPopupsService
    ) { }

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.services.currentUser;
    //this.receiver = this.form.selectedMember;
    try {
      if (this.currentUser.images && this.currentUser.images.length != 3)
        this.senderImg = Utility.rebaseImageUrl(this.currentUser.images[0].thumbnailUrl);
      }
    catch {
      // Reloading? go back to sell gold page
      this.router.navigate(['sell-gold']);
    }
  }

  async otpSubmit(otp: string){
      await this.services.sellGoldDetails({
        goldAmount: this.services.sellGold.goldAmount,
        goldPrice: this.services.sellGold.goldPrice,
        goldReference: this.services.sellGold.goldReference,
        goldSplit: this.services.sellGold.goldSplit,
        feeCharge: this.services.sellGold.feeCharge
    }).toPromise().then(() => {
      this.ngPopups.alert('Your gold has been submited!');
      this.router.navigate(['dashboard']);
    });
  }
}


