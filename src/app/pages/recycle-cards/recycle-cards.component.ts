import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

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

  constructor(private service: Services, private route: Router) { }

  ngOnInit(): void {
    this.service.merchantRecycle().subscribe((res: any)=> {
    this.recycleList = res;
    console.log(this.recycleList, "hhdsjfgwuf")

    try{
      for(var i = 0; i< this.recycleList.recyclePricePerGram.length; i++){
        this.data.push([{
          recycleName : this.recycleList.recycleProducts[i],
          recyclePrice : this.recycleList.recyclePricePerGram[i]
        }])
        this.userInputWeight.push(0);
      }
      

    }catch(e){

    }
    })
  }

  totalPrice(){
    console.log(this.userInputWeight,"hehe")
    console.log(this.userInputWeight.length, "length")
    console.log(this.recycleList.recyclePricePerGram, "price")
    let invoice_length = this.userInputWeight.length;
    let totalPrice = 0;
    for ( let i = 0; i< invoice_length; i++ ){
        totalPrice += this.userInputWeight[i] * this.recycleList.recyclePricePerGram[i];
    }
     this.totalPricePerGram = totalPrice.toString();
  }


  incQuantity(i:string) {
    console.log(i)
      this.userInputWeight[parseInt(i)] = this.userInputWeight[parseInt(i)] + 500;
    
  }
  decQuantity(i:string) {
      this.userInputWeight[parseInt(i)] = this.userInputWeight[parseInt(i)] - 10;
    
  }

  confirmRecycle(){
    try{
      if(this.totalPricePerGram.length > 0){
        this.service.amountRecycle = this.totalPricePerGram;
        this.service.qrgenerate = false;
        this.service.redeemQr = false;
        this.route.navigate(['topup-qr']);
      }else{
        alert("Error while calculating")
      }
    }catch(e){

    }
    
  }

}
