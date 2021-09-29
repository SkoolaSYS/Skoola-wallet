import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-buy-gold-details',
  templateUrl: './buy-gold-details.component.html'
})
export class BuyGoldDetailsComponent implements OnInit {
goldAmount: String;

  constructor(
    private services:Services,
    private router:Router,
    private ngPopups: NgPopupsService) { 
      
    console.log(this.services.buyGold);
  }

  ngOnInit(): void {
    //this.goldAmount = this.services.buyGold.goldAmount;
  }
  async otpSubmit(otp: string){
    console.log("click icon correct");
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
