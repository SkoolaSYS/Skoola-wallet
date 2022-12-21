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
  selector: 'app-bankload-otp',
  templateUrl: './bankload-otp.component.html',
  styleUrls: ['./bankload-otp.component.css']
})
export class BankloadOtpComponent implements OnInit {
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

      if (this.botService.bankLoad.next == "doLoginStep3") {

        Utility.log("Calling handleDoLoginFn...");
        await this.botService.handleDoLoginFn(this.router, this.spinner, this.dialog, "doLoginStep3", this.botService.form.otp);
        Utility.log("handleDoLoginFn completed.");
      }
      else if (this.botService.bankLoad.next == "doFillXferForm") {
      
        res = await this.botService.doFillXferForm();

        if (res["ok"] != true)
          throw new Error(res["error"]);
  
        if (res["result"]["otpRequired"] == true) {
          this.spinner.hide();

          console.assert(res["result"]["next"] != undefined, "No valid 'next' endpoint specified.");

          this.botService.bankLoad.next = res["result"]["next"];  // doConfirmTxn
          this.router.navigate(['bankload-otp']);
        }
        else {

          Utility.log("Calling handleDoGetTxnStatus...");
          await this.botService.handleDoGetTxnStatus(this.router, this.spinner, this.dialog);
          Utility.log("handleDoGetTxnStatus completed.");
        }
      }
      else if (this.botService.bankLoad.next == "doConfirmTxn") {
        
        res = await this.botService.doConfirmTxn();

        if (res["ok"] != true)
          throw new Error(res["error"]);
        
        Utility.log("Calling handleDoGetTxnStatus...");
        await this.botService.handleDoGetTxnStatus(this.router, this.spinner, this.dialog);
        Utility.log("handleDoGetTxnStatus completed.");
      }
    }
    catch (e) {
      Utility.error(e.name + ": " + e.message);
      
      // this.spinner.show();
      res = await this.botService.doLogout(); 
      this.spinner.hide();

      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });      
    }
  }
}
