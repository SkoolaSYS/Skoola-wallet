import { Component, Input, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-pledge-details-view',
  templateUrl: './pledge-details-view.component.html'
})
export class PledgeDetailsViewComponent implements OnInit {
dateGold
amountPledge
splitGold
chargePledge
financingPledge
chargeProvider
charge
rate
  constructor(private services: Services) { }
  @Input() sender: string;
  @Input() amount: string;
  @Input() image: string;

  ngOnInit(): void {
    this.dateGold = Utility.formatDate(new Date());
    this.amountPledge = this.services.pledgeGold.pledgeAmount;
    this.splitGold = this.services.pledgeGold.pledgeGoldSplit.toFixed(5);
    this.chargePledge = this.services.pledgeGold.pledgeCharge;
    this.financingPledge = this.services.pledgeGold.pledgeFinancing.toFixed(3);
    this.chargeProvider = this.services.pledgeGold.chargeProvider.toFixed(3);
    this.charge = this.services.pledgeGold.charge;
    this.rate = this.services.pledgeGold.rate;
  }

}
