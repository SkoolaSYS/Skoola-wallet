import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-topup-qr',
  templateUrl: './topup-qr.component.html'
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
    Utility.log(currentUser);
    this.isRedeem = currentUser.redeem;
    this.isRecycle = currentUser.recycle;
    if ((this.isRedeem && this.services.redeemQr) || this.services.redeemDetail) {
      Utility.log("abc")
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
      
      this.amountRecycle = this.services.amountRecycle;
      const data = {
        "route": "recycle-info",
        "merchantId": currentUser.id.toString(),
        "amount": this.services.amountRecycle,
        "recycleWaste": this.services.recycleWaste,
        "recycleWeight": this.services.recycleWeight
      }
      await this.services.encrypt({ text: JSON.stringify(data) }).toPromise()
      this.href = this.services.qrData.decryptText
    }
    else{
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
