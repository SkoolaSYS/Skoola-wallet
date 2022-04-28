import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-recycle-cards',
  templateUrl: './recycle-cards.component.html'
})
export class RecycleCardsComponent implements OnInit {
  userInputWeight: any = [];
  data: any[] = [];
  recycleList: any = [];
  recycleName: string;
  recyclePrice: number;
  totalPricePerGram: string;
  isMerchant: boolean;

  constructor(private service: Services, private route: Router, private ngPopups: NgPopupsService) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.service.currentUser;
    this.isMerchant = currentUser.merchant
    this.service.merchantRecycle().subscribe((res: any) => {
      this.recycleList = res;

      try {
        for (var i = 0; i < this.recycleList.recyclePricePerGram.length; i++) {
          this.data.push([{
            recycleName: this.recycleList.recycleProducts[i],
            recyclePrice: this.recycleList.recyclePricePerGram[i]
          }])
          this.userInputWeight.push(0);
        }


      } catch (e) {

      }
    })
  }

  totalPrice() {
    let invoice_length = this.userInputWeight.length;
    let totalPrice = 0;
    for (let i = 0; i < invoice_length; i++) {
      totalPrice += this.userInputWeight[i] * this.recycleList.recyclePricePerGram[i];
    }
    this.totalPricePerGram = totalPrice.toString();
    
  }


  incQuantity(i: string) {
    Utility.log(i)
    this.userInputWeight[parseInt(i)] = this.userInputWeight[parseInt(i)] + 500;

  }
  decQuantity(i: string) {
    this.userInputWeight[parseInt(i)] = this.userInputWeight[parseInt(i)] - 10;

  }

  confirmRecycle() {
    this.totalPrice();
    if (parseFloat(parseFloat(this.service.topupBalance).toFixed(2)) > parseFloat(parseFloat(this.totalPricePerGram).toFixed(2))) {
      try {
        if (this.totalPricePerGram.length > 0) {
          this.service.amountRecycle = this.totalPricePerGram;
          this.service.recycleWeight = this.userInputWeight;
          this.service.recycleWaste = this.recycleList.recycleProducts;
          this.service.qrgenerate = false;
          this.service.redeemQr = false;
          this.route.navigate(['topup-qr']);
        } else {
          this.ngPopups.alert('Error while calculating...',{theme:'material',title:'Oops...'})
        }
      } catch (e) {

      }

    }else{
      this.ngPopups.alert('Your topup wallet is insufficient for payment.',{theme:'material',title:'Insufficient Amount'});
    }
  }

}
