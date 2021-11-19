import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
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
  sumGold: number;
  amountBalance;
  constructor(private services:Services, private router:Router, private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
    
    this.dateGold = Utility.formatDate(new Date());
    this.services.calAvgGold().subscribe((res: any) => {
      this.goldAverage = res.goldAverage.toFixed(2).toString().split(".");
    })
    
  }
  
  async totalAvg(){
    this.totalValue = parseFloat(this.average)*parseInt(this.goldAverage)
      }

  async dataGold(amountGold:number,priceGold:string,referenceGold:string){
    if (amountGold != null && priceGold != null && referenceGold != null){
      await this.services.sellGoldComponent({
        goldAmount: this.amountGold,
        goldPrice: this.priceGold,
        goldReference: this.referenceGold
      }).toPromise().then(() => {
        this.services.getAccountBalance().subscribe((res:any)=>{
          //check gold balance
          this.sumGold = parseFloat(res[0].gold.sumGoldAmount.toFixed(5));
          this.amountGold = parseFloat(this.amountGold);
          if(this.sumGold <= this.amountGold){
            // console.log(typeof this.amountGold);
            // console.log(typeof this.sumGold);
            this.ngPopups.alert('Your gold is not enough!');
          }
          else{
          //check amount balance
          this.amountBalance = parseFloat(this.services.currentBalance);
            this.priceGold = parseFloat(this.priceGold)
            if(this.amountBalance <= this.priceGold){
              this.ngPopups.alert('Your balance is not enough!');
              // console.log(typeof this.amountBalance);
              // console.log(typeof this.priceGold);
            }
            else{
              this.router.navigate(['sell-gold-details']);
            }
          }
        });
        
      })
  }}
}
