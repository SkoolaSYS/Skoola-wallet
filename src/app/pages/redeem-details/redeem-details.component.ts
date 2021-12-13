import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-redeem-details',
  templateUrl: './redeem-details.component.html'
})
export class RedeemDetailsComponent implements OnInit {
  currentUser: any;
  senderImg: string = "";
  public isRedeem: boolean;
  constructor(private services:Services,private router:Router,private ngPopups: NgPopupsService) { }

  async ngOnInit(): Promise<void> {
    
    this.currentUser = await this.services.currentUser;
    this.isRedeem = this.currentUser.redeem;
    try {
      if (this.currentUser.images && this.currentUser.images.length != 3)
        this.senderImg = Utility.rebaseImageUrl(this.currentUser.images[0].thumbnailUrl);
      }
    catch {
      // Reloading? go back to redeem gold page
      this.router.navigate(['redeem']);
    }
  }
  async otpSubmit(otp: string){
      await this.services.redeemDetails({
        amountRedeem: this.services.redeemGold.amountRedeem,
        serviceRedeem: this.services.redeemGold.serviceRedeem,
        centreRedeem: this.services.redeemGold.centreRedeem,
        dateRedeem: this.services.redeemGold.dateRedeem,
        referenceRedeem: this.services.redeemGold.referenceRedeem
        
    }).toPromise().then(() => {
      // this.ngPopups.alert('Your gold has been submited!');
      this.services.redeemDetail = true;
      this.router.navigate(['topup-qr']);
    });
  }
}
