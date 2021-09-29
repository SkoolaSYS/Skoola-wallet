import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-sell-gold',
  templateUrl: './sell-gold.component.html'
})
export class SellgoldComponent implements OnInit {
  average: string;
  goldAverage: string;
  amountGold;
  priceGold;
  referenceGold;
  goldData:any;
  public buygold:boolean = true
  dateGold: string;
  totalValue: number;
  constructor(private services:Services, private router:Router) { }

  ngOnInit(): void {
    
    this.dateGold = Utility.formatDate(new Date());
    this.services.calAvgGold().subscribe((res: any) => {
      this.goldAverage = res.goldAverage.toFixed(2).toString().split(".");
    })
    
  }
  
  async totalAvg(){
    this.totalValue = parseFloat(this.average)*parseInt(this.goldAverage)
      }

  async dataGold(amountGold:string,priceGold:string,referenceGold:string){
    if (amountGold != null && priceGold != null && referenceGold != null){
      await this.services.sellGoldComponent({
        goldAmount: this.amountGold,
        goldPrice: this.priceGold,
        goldReference: this.referenceGold
      }).toPromise().then(() => {
        this.router.navigate(['sell-gold-details']);
      })
  }}
}
