import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-sellgold-details-view',
  templateUrl: './sellgold-details-view.component.html'
})
export class SellGoldDetailsViewComponent implements OnInit {
  goldPrice:string;
  goldSplit:string;
  goldAmount:string;

  constructor(private services: Services) { }

  ngOnInit(): void {
    this.goldAmount = this.services.sellGold.goldAmount
    this.goldPrice = this.services.sellGold.goldPrice
  }

}
