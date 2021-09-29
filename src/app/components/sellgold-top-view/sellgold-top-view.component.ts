import { Component, OnInit, Input } from '@angular/core';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-sellgold-top-view',
  templateUrl: './sellgold-top-view.component.html'
})
export class SellgoldTopViewComponent implements OnInit {
  buygold: boolean = true;
  goldPrice:string;
  goldSplit:string;
  feeCharge:string;
  goldAmount:string;

  constructor( private services: Services) { }
  @Input() sender: string;
  @Input() amount: string;
  ngOnInit(): void {
    this.goldPrice = this.services.sellGold.goldPrice
    this.goldSplit = this.services.sellGold.goldSplit
    this.feeCharge = this.services.sellGold.feeCharge
    this.goldAmount = this.services.sellGold.goldAmount
  }

}
