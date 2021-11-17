import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ExtraOptions, Router } from '@angular/router';
import { TRANSACTION_TYPE, Utility } from 'src/utils';
import { Services } from '../../services/service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

//qr payment danieal
// to do (auto select merchant account)
// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
// };

// const routes: Routes = [
//   {
//     path: 'content',
//   },
//   {
//     path: '',
//     redirectTo: 'content',
//     pathMatch: 'full'
//   }
// ]

@Component({
  selector: 'app-transfer', // FIXME
  templateUrl: './qr-payment.component.html'
})
export class QrPaymentComponent implements OnInit {
  public merchant: any= [];
  public transferForm: any = {};
  merchantSelected : any;
  receiverId: number;
  receiverName: string;
  amount: any;
  effectiveDate:string;
  merchantName:string;
  isMerchant: boolean;

  constructor(private services: Services, private router:Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }
  
  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant

    this.services.loadById(this.router.url.split("?")[1].split("=")[1]).subscribe((res: any) => {
      console.log(res);
      this.receiverId= res.id;
      this.receiverName= res.name;
      this.merchantName= res.name;

      this.effectiveDate = Utility.formatDate(new Date());
    },
    (err) => {
      console.log(err);
      // this.services.logout();
    });
  }

  async onSubmit() {
    const balance = parseFloat(this.services.currentBalance);
    const amount = parseFloat(this.amount);

    if (amount <= balance) {
      this.spinner.show();

      this.services.paymentTransfer({
        toMemberId: this.receiverId,        // this.form.toMemberId,
        toMemberPrincipal: this.receiverName,  // this.form.toMemberPrincipal,
        amount: this.amount,
        transactionTypeId: TRANSACTION_TYPE.QrPayment,
        //KS Server
        transferTypeId:32
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
   
  //   this.service.forms.transferForm = this.transferForm;
  //   this.service.opsTagging = 'transfer';
  //   this.merchantSelected = 'merchant01';
  //   this.service.loadById('6');
  
  
  // loadById(): void {
  //   const merchantId = this.merchant.find(merchant => merchant.id === this.merchant.id);
  //   if (merchantId) 
  //     this.transferForm.toMemberPrincipal = merchantId;
  //     this.transferForm.selectedMember = merchantId;
    
  // }


// function subscribe(arg0: (res: any) => void, arg1: (err: any) => void): any {
//   throw new Error('Function not implemented.');
// }

// function merchantId(merchantId: any) {
//   throw new Error('Function not implemented.');
// }

