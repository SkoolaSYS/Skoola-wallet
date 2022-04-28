import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';
import { TRANSACTION_TYPE, Utility } from 'src/utils';

@Component({
  selector: 'app-redeem-info',
  templateUrl: './redeem-info.component.html',
  styleUrls: ['./redeem-info.component.scss']
})
export class RedeemInfoComponent implements OnInit {
 
  isRedeemCenter:boolean;
  amountRedeem
  dateRedeem
  ownerRedeem
  centreRedeem
  isMerchant
  constructor(private services:Services, private router: Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant
    this.isRedeemCenter = currentUser.redeemCenter
    if (!currentUser.redeemCenter){
      this.services.redeemQr = true;
      this.router.navigate(['invalid-qr-link']);
    }
    this.services.redeemInfo(this.services.qrData.id).subscribe((res: any) => {
      console.log(res);
      this.amountRedeem = res.amountRedeem
      this.ownerRedeem = res.ownerRedeem
      this.centreRedeem = res.centerRedeem
      this.dateRedeem = Utility.formatDate(new Date(res.dateRedeem));
    }),
    (err) => {
      console.log(err);
      // this.services.logout();
    }
  }

  async confirm():Promise<void>{
    await this.services.redeemScan(this.services.qrData.id).toPromise().then(() => {
    this.router.navigate(['dashboard']);
  });
  
  }
}
