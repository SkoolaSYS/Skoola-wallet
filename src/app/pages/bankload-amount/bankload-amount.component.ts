import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Botv2Service } from 'src/app/services/botv2.service';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-bankload-amount',
  templateUrl: './bankload-amount.component.html',
  styleUrls: ['./bankload-amount.component.scss']
})
export class BankloadAmountComponent implements OnInit {  
  amount: string;
  isTopup:boolean;
  isMerchant:boolean;
  constructor(private services: Services, private botService: Botv2Service, private router: Router, 
              private spinner: NgxSpinnerService, private dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    this.isTopup = false
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant
    this.services.getMemberBankLoadData().subscribe((res: any) => {
      this.botService.bankLoad.fromBank = getBankFlow(res["id"].toString());
      this.botService.bankLoad.fromAccount = res["bankAccNumber"];
    });
  }

  submit() {
    this.spinner.show();
    this.botService.isTopup = this.isTopup
    this.services.getBankLoadData().subscribe(
      (res) => {
        this.spinner.hide();
        this.botService.bankLoad.transactionFee = parseFloat(res["transactionFee"])
        const maxAmount = parseFloat(res["maxAmount"]);
        const maxBalance = parseFloat(res["maxBalance"]);
        const balance = parseFloat(this.services.currentBalance);
        const amount = parseFloat(this.amount);

        if (amount > maxAmount) {
          this.dialog.open(AlertDialogComponent, { 
            data: { 
              message: "The entered amount exceeds the maximum limit allowed for e-Wallet topup." 
            } 
          });
        }
        else if ((balance+amount) > maxBalance) {
          this.dialog.open(AlertDialogComponent, { 
            data: { 
              message: "The new account balance exceeds the maximum limit allowed for an e-Wallet account." 
            } 
          });
        }
        else {
          this.botService.form.amount = this.amount;
          console.log(this.botService.form.amount);

          this.router.navigate(['bankload-username']); 
        }
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
  topup():void{
    var topupCheckbox = <HTMLInputElement> document.getElementById("topup");
    if(topupCheckbox.checked)
      this.isTopup = true;
    else
      this.isTopup = false;

    //console.log(this.isTopup);
  }
}

function getBankFlow(bankCode: string): string {
  let banks = new Map([
    ["1", "maybank"], 
    ["2", "cimb"], 
    ["3", "rhb"], 
    ["4", "rakyat"], 
    ["5", "public"], 
    ["6", "agro"], 
    ["7", "bimb"], 
    ["8", "affin"], 
    ["9", "rajhi"], 
    ["10", "alliance"], 
    ["11", "ambank"], 
    ["12", "muamalat"], 
    ["13", "bsn"], 
    ["14", "citi"], 
    ["15", "hlb"], 
    ["16", "hsbc"], 
    ["17", "kfh"], 
    ["18", "ocbc"], 
    ["19", "scb"], 
    ["20", "uob"], 
  ]);
  
  return banks.get(bankCode);
}
