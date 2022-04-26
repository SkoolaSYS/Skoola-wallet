import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { TRANSACTION_TYPE, Utility } from 'src/utils';
import { utils } from 'protractor';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html'
})
export class WithdrawComponent implements OnInit {
  withdrawDate: string;
  withdrawAmount: number;
  bankData: any;
  bankAccName: string;
  bankAccNumber: string;
  bankName: string;
  transactionFeeAmount:number;
  withdrawAmountWithCharge:number;
  withdrawalDesc: string;
  response:any;
  isMerchant: boolean;

  constructor(private service:Services, private router: Router, private ngPopups: NgPopupsService, private botServiceV2: Botv2Service, private spinner: NgxSpinnerService, private dialog: MatDialog) {
  }

  async ngOnInit(): Promise<void>{
    const currentUser: any = await this.service.currentUser;
    this.isMerchant = currentUser.merchant;

    this.service.getMemberBankData().subscribe((res: any)=>{
      this.bankData = res;
      this.bankAccName = this.bankData.bankAccName;
      this.bankAccNumber = this.bankData.bankAccNumber;
      this.bankName = this.bankData.bankName;
      //(this.bankData);
    },
    (err) => {
      Utility.log(err);
    });
    // const today = new Date();
    // const day = today.getDate();
    // const month = today.getMonth() + 1;
    // TODO: Currently we're making effective date only accept current date, hence the input is read-only.
    this.withdrawDate = Utility.formatDate(new Date());    // (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + today.getFullYear();
  }
  
  doWithdrawal(){
    this.service.getTransactionFeeAmount(TRANSACTION_TYPE.Withdraw).subscribe(async (res: any) => {
      this.transactionFeeAmount = res;
      this.withdrawAmountWithCharge = this.withdrawAmount + this.transactionFeeAmount;
      if (this.service.currentBalance >= this.withdrawAmountWithCharge){
        this.spinner.show();

        const currentUser = await this.service.currentUser;                
        await this.botServiceV2.doWithdraw({
          amount: this.withdrawAmount,
          desc: this.withdrawalDesc,
          accountId: this.service.userAccount.id,
          transactionTypeId: TRANSACTION_TYPE.Withdraw,
          bank: this.bankData,
          email: currentUser.email,
          nationalId: currentUser.customValues.find(object => object.internalName == "NRIC").value
        }).then((res => {
          this.spinner.hide();
          this.response = res;

          let statusMessage: string;
          if (this.response.ok){
            statusMessage = "Your withdrawal has been queued for processing."
          }else{
            statusMessage = "There was an error processing your request. Please try again."
          }
          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['dashboard']);
          });  
          
        })).catch((err) => {
          this.spinner.hide()
          let statusMessage: string = "There was an error processing your request. Please try again.";
          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['dashboard']);
          }); 
        })
           
      }else{
        let statusMessage: string = "Your current balance is not enough!";
          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
          dialogRef.afterClosed().subscribe(() => {
            // this.router.navigate(['dashboard']);
          });
      }
    });    
  }

}