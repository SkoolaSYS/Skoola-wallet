import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';

// xOTP = extra OTP
// This component handles extra OTP after a successful login required by certain banks e.g. RHB.

@Component({
  selector: 'app-bankload-xotp',
  templateUrl: './bankload-xotp.component.html',
  styleUrls: ['./bankload-xotp.component.css']
})
export class BankloadXotpComponent implements OnInit {
  otp: string;
  isMerchant:boolean;

  constructor(private botService: Botv2Service, private router: Router, 
              private ngPopups: NgPopupsService, private spinner: NgxSpinnerService, private dialog: MatDialog,private services: Services) { }

  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant;
  }

  async submit() {
    this.botService.form.otp = this.otp;
    let res: any;   

    try {
      this.spinner.show();

      res = await this.botService.doFillXferForm();
      //console.log("doFillXferForm:", res);        
      if (res["ok"] != true || res["result"]["error"] != undefined)
        throw new Error();

      if (res["result"]["otpRequired"] == true) {
        this.spinner.hide();
        this.router.navigate(['bankload-otp']);
      }
      else {  // TODO: Repetitive code! {rwa}
        res = await this.botService.doGetTxnStatus();
        //console.log("doGetTxnStatus:", res);
        if (res["ok"] != true)
          throw new Error();

        let statusMessage: string;
        // Display final status
        if (res["result"]["completed"] == true ) {
          const ref = res["result"]["bankReference"];
          statusMessage = `You have successfully loaded RM${this.botService.form.amount.toFixed(2)} into your wallet account (REF: ${ref}).`;
        } else {
          statusMessage = "There was an error processing your request. Please try again.";
        }   

        res = await this.botService.doLogout(); 
        //console.log("doLogout:", res);

        this.spinner.hide();
  
        const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['dashboard']);
        });   
      }
    }
    catch (e) {
      console.log(e);
      
      // this.spinner.show();
      res = await this.botService.doLogout(); 
      //console.log("doLogout:", res);
      this.spinner.hide();

      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });      
    }
  }
}
