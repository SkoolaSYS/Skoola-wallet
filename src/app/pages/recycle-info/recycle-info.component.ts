import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { concatMapTo } from 'rxjs/operators';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-recycle-info',
  templateUrl: './recycle-info.component.html'
})
export class RecycleInfoComponent implements OnInit {
  amount: any;
  merchantName: any;
  isRecycle: boolean;
  memberId;
  isMerchant:boolean;

  constructor(private services: Services, private route: Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.amount = this.services.qrData.amount
    console.log(this.services.qrData.id);
    this.services.loadById(this.services.qrData.merchantId).subscribe((res:any)=>{
      this.memberId= res.id;
      this.merchantName = res.name;
      console.log(this.merchantName, "hehehsh");
      
    },
    (err) => {
      (err);
      // this.services.logout();
    });
  }

  async confirm(): Promise<void>{
    if(this.services.topupBalance>parseFloat(this.amount)){
      const balance = parseFloat(this.services.topupBalance);
      const amount = parseFloat(this.amount);

      if(amount <= balance){
        this.spinner.show();

        this.services.paymentTransfer({
          toMemberId: this.memberId,
          toMemberPrincipal: this.merchantName,
          amount: this.amount,
          transferTypeId: 40,
        }).subscribe((res) =>{
          this.spinner.hide();
  
          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "Your payment has been successfully processed." } });
          dialogRef.afterClosed().subscribe(() => {
            this.services.activetransaction = true;
            this.services.transactionData.amount = this.amount;

            this.route.navigate(['dashboard']);
          });
        },
        (err) => {
          this.spinner.hide();

          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
          dialogRef.afterClosed().subscribe(() => {
            this.route.navigate(['dashboard']);
          });
        })
      }else {
        this.dialog.open(AlertDialogComponent, { data: { message: "The entered amount exceeds the available balance in your wallet account." } });
      }
    }
  }  

}
