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
  href: any
  data: any[] = [];
  idRedeem;
  amountRedeem;
  currentRedeem;
  dateRedeem;
  centreRedeem;
  coinRedeem;
  redeem;
  topup;
  recycle;
  amountRecycle;
  public isRedeem: boolean;
  public isRecycle: boolean;
  public isTopup: boolean;
  constructor(private services: Services, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    console.log(currentUser);
    this.isRedeem = currentUser.redeem;
    this.isRecycle = currentUser.recycle;
    console.log(this.isRecycle,"hdhdh")
    if ((this.isRedeem && this.services.redeemQr) || this.services.redeemDetail) {
      console.log("abc")
      this.services.redeemQr = false;
      this.redeem = true;
      this.services.redeemQrCode().subscribe(async (res: any) => {
        this.idRedeem = res.idRedeem;
        this.amountRedeem = res.amountRedeem;
        this.currentRedeem = res.currentRedeem;
        this.dateRedeem = Utility.formatDate(new Date(res.dateRedeem));
        this.centreRedeem = res.centreRedeem;
        this.coinRedeem = this.amountRedeem / this.currentRedeem;
        this.redeem = true;
        const data = {
          "route": "redeem-info",
          "id": res.idRedeem
        }

        await this.services.encrypt({ text: JSON.stringify(data) }).toPromise()
        this.href = this.services.qrData.decryptText
      })
    } else if (this.isRecycle) {
      this.recycle = true;
      
      console.log(currentUser,"hdgdd")
      this.amountRecycle = this.services.amountRecycle;
      const data = {
        "route": "recycle-info",
        "merchantId": currentUser.id.toString(),
        "amount": this.services.amountRecycle
      }
      console.log(data)
      await this.services.encrypt({ text: JSON.stringify(data) }).toPromise()
      this.href = this.services.qrData.decryptText
    }
    else{
      console.log("def")
      this.topup = true
      const currentUser: any = await this.services.currentUser;
      
      const data = {
        "route": "topup-info",
        "id": currentUser.id.toString(),
        "amount": this.services.amountTopup
      }
      await this.services.encrypt({ text: JSON.stringify(data) }).toPromise()
      this.href = this.services.qrData.decryptText
    }
  }
  async btnConfirm() {
    
    if (this.isRedeem) {
      this.topup = false;
      this.redeem = false;
      this.recycle = false;
      await this.services.redeemCancel(this.idRedeem).toPromise().then(() => {
        this.router.navigate(['redeem']);
      });
    }else if (this.isRecycle) {
      this.topup = false;
      this.redeem = false;
      this.recycle = false;
      this.router.navigate(['recycle']);
    }
    else {
      this.topup = false;
    this.redeem = false;
    this.recycle = false;
      this.router.navigate(['topup-amount']);
    }
  }
}
