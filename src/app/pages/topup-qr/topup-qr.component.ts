import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-topup-qr',
  templateUrl: './topup-qr.component.html',
  styleUrls: ['./topup-qr.component.scss']
})
export class TopupQrComponent implements OnInit {
  href:any
  data: any[] = []; 
  idRedeem;
  amountRedeem;
  currentRedeem;
  dateRedeem;
  centreRedeem;
  coinRedeem;
  redeem;
  public isRedeem: boolean;
  constructor(private services:Services, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    this.isRedeem = currentUser.redeem;
    if((this.isRedeem && this.services.redeemQr) || this.services.redeemDetail){
    this.services.redeemQrCode().subscribe(async (res: any) => {
      this.idRedeem = res.idRedeem;
      this.amountRedeem = res.amountRedeem;
      this.currentRedeem = res.currentRedeem;
      this.dateRedeem = Utility.formatDate(new Date(res.dateRedeem));
      this.centreRedeem = res.centreRedeem;
      this.coinRedeem = this.amountRedeem/this.currentRedeem;
      this.redeem = true;
      const data = {
      "route"  :"redeem-info",
      "id"     : res.idRedeem
    }
  
    await this.services.encrypt({text: JSON.stringify(data)}).toPromise()
    this.href = this.services.qrData.decryptText
    })
  }
  else{
    const currentUser: any = await this.services.currentUser;
    const data = {
      "route" : "topup-info",
      "id" : currentUser.id.toString(),
      "amount" : this.services.amountTopup
    }
    await this.services.encrypt({text: JSON.stringify(data)}).toPromise()
    this.href = this.services.qrData.decryptText
    }
}
  async btnConfirm(){ 
    if(this.isRedeem){
      await this.services.redeemCancel(this.idRedeem).toPromise().then(() => {
        this.router.navigate(['redeem']);
      });
    }
    else{
      this.router.navigate(['topup-amount']);
    }
  }
}
