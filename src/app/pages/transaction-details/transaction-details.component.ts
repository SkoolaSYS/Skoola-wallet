import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { TRANSACTION_TYPE, Utility } from 'src/utils';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html'
})
export class TransactionDetailsComponent implements OnInit {
  form: any;
  currentUser: any;
  receiver: any;
  senderImg: string = "";
  receiverImg: string = "";
  effectiveDate: string = "";
  transactionFee: any;
  goldAmount: any;
  storedValue: number;

  constructor(private services: Services, private router: Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }
  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    this.currentUser = await this.services.currentUser;
    this.form = this.services.forms.transferForm || {}; // FIXME: Form is reset when page is reloaded, unless we persists data.
    //this.receiver = this.form.selectedMember;
    this.receiver = await this.services.receiver;

    try {
      if (this.currentUser.images && this.currentUser.images.length != 3)
        this.senderImg = Utility.rebaseImageUrl(this.currentUser.images[0].thumbnailUrl);
      if (this.receiver.images && this.receiver.images.length != 3)
        this.receiverImg = Utility.rebaseImageUrl(this.receiver.images[0].thumbnailUrl);
    }
    catch {
      // Reloading? go back to transfer page
      this.router.navigate(['transfer']);
    }

    // TODO: Original display format is '24 AUG 2020'
    this.effectiveDate = this.form.effectiveDate;
    this.transactionFee = this.services.transactionData.fee;
    this.goldAmount = this.services.transactionData.gold;  
    // console.log(`Gold: ${this.services.transactionData.gold} --> ${parseFloat(this.services.transactionData.gold).toFixed(4)}`);
  }
  
  otpSubmit(otp: string) {
    this.spinner.show();
    this.services.paymentTransfer({
    toMemberId: this.receiver.id,           // this.form.toMemberId,
    toMemberPrincipal: this.receiver.name,  // this.form.toMemberPrincipal,
    amount: this.form.amount,
    transactionPassword: otp,
    description: this.form.description,
    transactionTypeId: TRANSACTION_TYPE.Transfer
   }).toPromise().then(()=>{
     
      // this.services.counter+=1;
      
  });
   this.spinner.hide();
   this.services.activetransaction = true;
   this.services.transactionData.amount = this.form.amount;

    this.services.paymentTransfer({
      toMemberId: this.receiver.id,           // this.form.toMemberId,
      toMemberPrincipal: this.receiver.name,  // this.form.toMemberPrincipal,
      amount: this.form.amount,
      transactionPassword: otp,
      description: this.form.description,
      transactionTypeId: TRANSACTION_TYPE.Transfer
    }).subscribe(
      (res) => {
        this.spinner.hide();

        const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "The fund has been successfully transferred." } });
        dialogRef.afterClosed().subscribe(async () => {
          this.services.activetransaction = true;
          this.services.transactionData.amount = this.form.amount;

          // TODO: Should be done in web push handler
          // update counter
          this.services.counter = this.services.counter + 1;

          // write to storage
          const data = {
            counter: this.services.counter
          }
    
          const currentUser: any = await this.services.currentUser;
          localStorage.setItem(currentUser.id.toString(), JSON.stringify(data));
      
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
}
