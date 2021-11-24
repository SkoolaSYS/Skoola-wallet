import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-buy-gold-details',
  templateUrl: './buy-gold-details.component.html'
})
export class BuyGoldDetailsComponent implements OnInit {
goldAmount: String;
currentUser: any;
senderImg: string = "";

  constructor(
    private services:Services,
    private router:Router,
    private ngPopups: NgPopupsService) { 
  }

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.services.currentUser;
    //this.receiver = this.form.selectedMember;
    try {
      if (this.currentUser.images && this.currentUser.images.length != 3)
        this.senderImg = Utility.rebaseImageUrl(this.currentUser.images[0].thumbnailUrl);
      }
    catch {
      // Reloading? go back to buy gold page
      this.router.navigate(['buy-gold']);
    }
  }
  async otpSubmit(otp: string){
    // console.log("click icon correct");
      await this.services.buyGoldDetails({
        goldAmount: this.services.buyGold.goldAmount,
        goldPrice: this.services.buyGold.goldPrice,
        goldReference: this.services.buyGold.goldReference,
        goldSplit: this.services.buyGold.goldSplit,
        feeCharge: this.services.buyGold.feeCharge,
        goldId: this.services.buyGold.goldId
    }).toPromise().then(() => {
      this.ngPopups.alert('Your gold has been updated!');
      this.router.navigate(['dashboard']);
    });
  }
}
