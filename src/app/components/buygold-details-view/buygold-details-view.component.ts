import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-buygold-details-view',
  templateUrl: './buygold-details-view.component.html'
})
export class BuyGoldDetailsViewComponent implements OnInit {

  goldPrice: String;
  goldAmount: String;
  dateGold: String;

  constructor(private services: Services) { }

  ngOnInit(): void {
    this.dateGold = Utility.formatDate(new Date());
    this.goldPrice = this.services.buyGold.goldPrice;
    this.goldAmount = this.services.buyGold.goldAmount;
  }

}
