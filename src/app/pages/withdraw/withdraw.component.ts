import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { TRANSACTION_TYPE } from 'src/utils';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html'
})
export class WithdrawComponent implements OnInit {
  transferDate: string;
  transferAmount: number;
  transferDesc: string;
  bankData: any;
  bankFormCountry = "MY";
  banks:any;
  bankAccName: string;
  bankAccNumber: string;
  bankName: string;
  transactionFeeAmount:number;
  transferAmountWithCharge:number;
  withdrawalDesc;

  constructor(private service:Services, private router: Router, private ngPopups: NgPopupsService) {
  }

  ngOnInit(): void {
    this.service.getMemberBankData().subscribe((res: any)=>{
      this.bankData = res;
      this.bankAccName = this.bankData.bankAccName;
      this.bankAccNumber = this.bankData.bankAccNumber;
      this.bankName = this.bankData.bankName;
      //console.log(this.bankData);
    },
    (err) => {
      console.log(err);
    });
    
  }
  
  doWibt(){
    this.service.getTransactionFeeAmount(TRANSACTION_TYPE.Withdraw).subscribe((res: any) => {
      this.transactionFeeAmount = res;
      this.transferAmountWithCharge = this.transferAmount + this.transactionFeeAmount;
      if (this.service.currentBalance >= (this.transferAmountWithCharge)){
        this.service.doWithdrawal({
          amount: this.transferAmount,
          desc: this.withdrawalDesc,
          accountId: this.service.userAccount.id
        }).toPromise().then(() => {
          this.ngPopups.alert('Your withdraw submission is successful!');
          this.router.navigate(['dashboard']);
        })
        .catch((err) => {
          this.ngPopups.alert('There was an error in your submission!');
        });  
      }else{
        this.ngPopups.alert('Your current balance is not enough!');
      }
    });
    
  }
  
  

//   login(): void {
//     let $this = this
//     console.log("Logging in..")
//     this.botService.sendLoginRequest()
//       .subscribe(res => {
//         console.log("Logged in.")
//         console.debug(res)

//         $this.doTransfer()
//       })
//   }

//   doTransfer(): void {
//     console.log("Requesting transfer to USER..")
//     this.botService.sendDoWithdrawRequest({
//       amount: this.transferAmount,
//       description: this.transferDesc
//     }).subscribe(res => {
//       console.log("Transfer requested successfully. Please enter TAC")
//     })
//   }

//   enterTac(): void {
//     let $this = this
//     console.log("TAC sent.")
//     this.botService.sendTacRequest({
//       tac: $this.otp
//     }).subscribe(res => {
//       console.log("WIBT is completed!")
//     })
//   }

// }
  }