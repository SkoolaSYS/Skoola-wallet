import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-sell-gold-details',
  templateUrl: './sell-gold-details.component.html'
})
export class SellGoldDetailsComponent implements OnInit {
  
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

  ngOnInit(): void {
    console.log(this.services.sellGold);
    console.log(this.services.sellGold.feeCharge);
  }

  async otpSubmit(otp: string){
    console.log("click icon correct");
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


