import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-gold-to-purchase',
  templateUrl: './gold-to-purchase.component.html'
})
export class GoldToPurchaseComponent implements OnInit {

  goldAmount: String;
  goldPrice;
  goldId: String;
  value: String;
  goldReference: string;
  goldAverage: number;
  average: number;
  sign: any;
  amountBalance;

  constructor(
    private services: Services,
    private router:Router,
    private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
    this.services.calAvgGold().subscribe((res: any) => {
    this.goldAverage = res.goldAverage.toFixed(2).toString(); 
     })

    this.value = this.router.url.split("?")[1].split("=")[1];
    console.log(this.value);
    this.services.getGoldData(this.value).subscribe((res: any) => {
      this.goldAmount = res.goldAmount;
      this.goldPrice = res.goldPrice;

      this.average = Math.round(res.goldPrice/res.goldAmount)
    if(this.average > this.goldAverage){
      this.sign = ">";
    }
    else if(this.average < this.goldAverage){
      this.sign = "<";
    }
    else{
      this.sign = "=";
    }
    });

    
  }

async btnBuy(goldReference:string){
  console.log(this.goldReference)
      if (this.goldReference != null, this.goldAmount != null, this.goldId != null, this.goldPrice != null){
        await this.services.buyGoldComponent({
          goldReference: goldReference,
          goldId : this.value,
          goldAmount : this.goldAmount,
          goldPrice : this.goldPrice
        }).toPromise().then(() => {
          this.services.getAccountBalance().subscribe((res:any)=>{
            this.amountBalance = parseFloat(this.services.currentBalance);
            this.goldPrice = parseFloat(this.goldPrice)
            if(this.amountBalance <= this.goldPrice){
              this.ngPopups.alert('Your balance is not enough!');
              // console.log(typeof this.amountBalance);
              // console.log(typeof this.goldPrice);
            }
            else{
              this.router.navigate(['buy-gold-details']);
            }
        });       
      })
    }
  }
}