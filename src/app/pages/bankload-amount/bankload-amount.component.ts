import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Botv2Service } from 'src/app/services/botv2.service';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-bankload-amount',
  templateUrl: './bankload-amount.component.html'
})
export class BankloadAmountComponent implements OnInit {  
  amount: string;
  isTopup:boolean;
  isMerchant:boolean;
  bankImage: any;
  constructor(private services: Services, private botService: Botv2Service, private router: Router, 
              private spinner: NgxSpinnerService, private dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    this.spinner.hide();    
    this.isTopup = false
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant;
    
    this.services.getMemberBankLoadData().subscribe((res: any) => {
      this.botService.bankLoad.fromBank = getBankFlow(res["id"].toString());
      this.botService.bankLoad.fromAccount = res["bankAccNumber"];
      this.botService.bankLoad.fromImageBank = getImageBank(res["id"].toString());
      this.bankImage = this.botService.bankLoad.fromImageBank;
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
  }
}

function getBankFlow(bankCode: string): string {
  let banks = new Map([
    ["1", "mbb"],    // Maybank Berhad
    ["2", "cimb"],   // CIMB Bank Berhad
    ["3", "rhb"],    // RHB Bank Berhad
    ["4", "bkrm"],   // Bank Kerjasama Rakyat Malaysia Berhad
    ["5", "pbb"],    // Public Bank Berhad
    ["6", "agro"],   // Agrobank
    ["7", "bimb"],   // Bank Islam Malaysia Berhad
    ["8", "abb"],    // Affin Bank Berhad
    ["9", "arm"],    // Al Rajhi Investment Corporation(Malaysia) Berhad
    ["10", "abmb"],  // Alliance Bank Malaysia Berhad
    ["11", "ambb"],  // AmBank Berhad
    ["12", "bmmb"],  // Bank Muamalat Malaysia Berhad
    ["13", "bsn"],   // Bank Simpanan Nasional
    ["14", "citi"],  // Citibank Berhad
    ["15", "hlbb"],  // Hong Leong Bank Berhad
    ["16", "hsbc"],  // HSBC Bank Malaysia Berhad
    ["17", "kfh"],   // Kuwait Finance House (Malaysia) Berhad
    ["18", "ocbc"],  // OCBC Bank (Malaysia) Berhad
    ["19", "scb"],   // Standard Chartered Bank Malaysia Berhad
    ["20", "uob"]    // United Overseas Bank Berhad     
  ]);
  
  return banks.get(bankCode);
}
function getImageBank(bankCode: string): string {
  let banks = new Map([
    ["1", "assets/banks/maybank_logo.png"],    // Maybank Berhad
    ["2", "assets/banks/cimb_clicks.png"],   // CIMB Bank Berhad
    ["3", "rhb"],    // RHB Bank Berhad
    ["4", "bkrm"],   // Bank Kerjasama Rakyat Malaysia Berhad
    ["5", "assets/banks/publicbank_logo.png"],    // Public Bank Berhad
    ["6", "assets/banks/agro_bank.png"],   // Agrobank
    ["7", "assets/banks/bank_islam.png"],   // Bank Islam Malaysia Berhad
    ["8", "abb"],    // Affin Bank Berhad
    ["9", "arm"],    // Al Rajhi Investment Corporation(Malaysia) Berhad
    ["10", "assets/banks/alliance_bank.png"],  // Alliance Bank Malaysia Berhad
    ["11", "ambb"],  // AmBank Berhad
    ["12", "assets/banks/bank_muamalat.png"],  // Bank Muamalat Malaysia Berhad
    ["13", "assets/banks/bsn_logo.png"],   // Bank Simpanan Nasional
    ["14", "citi"],  // Citibank Berhad
    ["15", "hlbb"],  // Hong Leong Bank Berhad
    ["16", "hsbc"],  // HSBC Bank Malaysia Berhad
    ["17", "kfh"],   // Kuwait Finance House (Malaysia) Berhad
    ["18", "assets/banks/ocbc_logo.png"],  // OCBC Bank (Malaysia) Berhad
    ["19", "scb"],   // Standard Chartered Bank Malaysia Berhad
    ["20", "uob"]    // United Overseas Bank Berhad     
  ]);
  
  return banks.get(bankCode);
}
