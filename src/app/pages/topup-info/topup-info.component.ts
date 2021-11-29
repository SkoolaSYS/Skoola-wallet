import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';
import { TRANSACTION_TYPE } from 'src/utils';

@Component({
  selector: 'app-topup-info',
  templateUrl: './topup-info.component.html',
  styleUrls: ['./topup-info.component.scss']
})
export class TopupInfoComponent implements OnInit {
  amount:any
  receiverName:any
  merchantName:any
  isMerchant:boolean;
  memberId
  constructor(private services:Services, private router: Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant
    if (!currentUser.merchant){
      this.router.navigate(['invalid-qr-link']);
    }
   //this.amount = this.router.url.split("?")[1].split("=")[2];
    this.amount = this.services.qrData.amount
    this.services.loadById(this.services.qrData.id).subscribe((res: any) => {
      this.memberId= res.id;
      this.receiverName= res.name;
      this.merchantName= res.name;
    },
    (err) => {
      console.log(err);
      // this.services.logout();
    });
  }

  async confirm():Promise<void>{
    //const currentUser: any = await this.services.currentUser;
    //console.log(currentUser)
    if(this.services.topupBalance > parseFloat(this.amount)){
      const balance = parseFloat(this.services.topupBalance);
      const amount = parseFloat(this.amount);
  
      if (amount <= balance) {
        this.spinner.show();
  
        this.services.paymentTransfer({
          toMemberId: this.memberId,        // this.form.toMemberId,
          toMemberPrincipal: this.receiverName,  // this.form.toMemberPrincipal,
          amount: this.amount,
          transactionTypeId: TRANSACTION_TYPE.Topup,
          //KS Server
          transferTypeId:33
        }).subscribe(
          (res) => {
            this.spinner.hide();
  
            const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "Your payment has been successfully processed." } });
            dialogRef.afterClosed().subscribe(() => {
              this.services.activetransaction = true;
              this.services.transactionData.amount = this.amount;
  
              this.router.navigate(['dashboard']);
            });
          },
          (err) => {
            this.spinner.hide();
  
            const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
            dialogRef.afterClosed().subscribe(() => {
              this.router.navigate(['dashboard']);
            });
          }
        )
      }
      else {
        this.dialog.open(AlertDialogComponent, { data: { message: "The entered amount exceeds the available balance in your wallet account." } });
      }
   }
  }
}
