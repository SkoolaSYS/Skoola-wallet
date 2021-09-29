import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-buygold-details-view',
  templateUrl: './buygold-details-view.component.html'
})
export class BuyGoldDetailsViewComponent implements OnInit {

  goldPrice: String;
  goldAmount: String;

  constructor(private services: Services) { }

  ngOnInit(): void {
    this.goldPrice = this.services.buyGold.goldPrice;
    this.goldAmount = this.services.buyGold.goldAmount;
  }

}
