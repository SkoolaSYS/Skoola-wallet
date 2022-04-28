import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-topup-amount',
  templateUrl: './topup-amount.component.html'
})
export class TopupAmountComponent implements OnInit {
  amountTopup:any
  constructor(private services:Services, private router: Router) { }

  ngOnInit(): void {
  }
  confirm(): void{
    try{
      if (this.amountTopup.length > 0){
        this.services.amountTopup = this.amountTopup
        this.router.navigate(['topup-qr']);
      }else{
        alert("no value in topup")
      }
    }catch{
      alert("no value in topup")
    }
    this.services.amountTopup = this.amountTopup
    this.services.qrgenerate = false;
    this.services.redeemQr = false;
    this.router.navigate(['topup-qr']);
  }
}
