import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-gold-to-purchase',
  templateUrl: './gold-to-purchase.component.html'
})
export class GoldToPurchaseComponent implements OnInit {

  goldAmount: String;
  goldPrice: String;
  goldId: String;
  value: String;
  goldReference: string;

  constructor(
    private services: Services,
    private router:Router) { }

  ngOnInit(): void {
    this.value = this.router.url.split("?")[1].split("=")[1];
    console.log(this.value);
    this.services.getGoldData(this.value).subscribe((res: any) => {
      this.goldAmount = res.goldAmount;
      this.goldPrice = res.goldPrice;
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
          this.router.navigate(['buy-gold-details']);
        })
        
    }}
}
