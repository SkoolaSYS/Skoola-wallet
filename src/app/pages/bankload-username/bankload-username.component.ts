import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-bankload-username',
  templateUrl: './bankload-username.component.html'
})
export class BankloadUsernameComponent implements OnInit {
  username: string;
  isMerchant: boolean;
  bankImage: any;

  constructor(private botService: Botv2Service, private router: Router, private ngPopups: NgPopupsService, 
              private spinner: NgxSpinnerService, private dialog: MatDialog, private services: Services) { }

  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant;

    this.services.getMemberBankLoadData().subscribe((res: any) => {
      this.botService.bankLoad.fromImageBank = getImageBank(res["id"].toString());
      this.bankImage = this.botService.bankLoad.fromImageBank;
    });
  } 

  async submit() {
    this.botService.form.username = this.username;
    let res: any

    try {
      this.spinner.show();
      let session_id:any = await this.botService.get_BOT_SESSION_ID();
      this.botService.encryption_key = session_id["1"];
      
      res = await this.botService.doLoginStep0();
      
      if (res["ok"] ==  true) {
          res = await this.botService.doLoginStep1();

          if (res["ok"] != true)
            throw new Error(res["error"]);

          this.botService.form.secureImage = res["result"]["secretImage"];
          this.botService.form.secretPhrase = res["result"]["secretPhrase"];
    
          this.spinner.hide();
          this.router.navigate(['bankload-password']);
      }
      else {
        throw new Error(res["error"]);        
      }
    } 
    catch (e) {
      Utility.error(e.name + ": " + e.message);    
      
      // Quit the driver
      res = await this.botService.doQuit(); 
      this.spinner.hide()

      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });
    }
  }
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
