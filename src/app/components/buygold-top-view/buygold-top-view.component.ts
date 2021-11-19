import { Component, OnInit, Input } from '@angular/core';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-buygold-top-view',
  templateUrl: './buygold-top-view.component.html'
})
export class BuygoldTopViewComponent implements OnInit {

  goldPrice: String;
  feeCharge: String;
  goldAmount: String;
  goldSplit: String;

  constructor(private services: Services) { }
  @Input() sender: string;
  @Input() amount: string;
  ngOnInit(): void {

    this.goldPrice = this.services.buyGold.goldPrice;
    this.feeCharge = this.services.buyGold.feeCharge;
    this.goldAmount = this.services.buyGold.goldAmount;
    this.goldSplit = this.services.buyGold.goldSplit.toFixed(5);
  }

}
