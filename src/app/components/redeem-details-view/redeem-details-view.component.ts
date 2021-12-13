import { Component, Input, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-redeem-details-view',
  templateUrl: './redeem-details-view.component.html'
})
export class RedeemDetailsViewComponent implements OnInit {
amountRedeem: string;
chargeRedeem: string;
splitRedeem: string;
dateGold;

  constructor(private services: Services) { }
  @Input() sender: string;
  @Input() amount: string;
  @Input() image: string;
  
  ngOnInit(): void {
    this.dateGold = Utility.formatDate(new Date());
    this.amountRedeem = this.services.redeemGold.amountRedeem
    this.chargeRedeem = this.services.redeemGold.chargeRedeem
    this.splitRedeem = this.services.redeemGold.splitRedeem
  }

}
