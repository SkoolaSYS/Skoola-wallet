import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-invalid-qr-link',
  templateUrl: './invalid-qr-link.component.html'
})
export class InvalidQrLinkComponent implements OnInit {
redeem;
topup;
  constructor(private services:Services) { }

  ngOnInit(): void {
    if(this.services.redeemQr){
      this.redeem = true;
      this.topup = false;
    }else{
      this.topup = true;
      this.redeem = false;
    }
  }

  qrcode(): void{
    window.location.href='./#/qr-code'
  }

}
