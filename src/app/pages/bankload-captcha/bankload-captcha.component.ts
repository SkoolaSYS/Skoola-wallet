import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Botv2Service } from 'src/app/services/botv2.service';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-bankload-captcha',
  templateUrl: './bankload-captcha.component.html',
  styleUrls: ['./bankload-captcha.component.css']
})
export class BankloadCaptchaComponent implements OnInit {
  captchaImage: string;
  captchaText: string;
  isMerchant: boolean;

  constructor(private botService: Botv2Service, private router: Router, 
    private ngPopups: NgPopupsService, private spinner: NgxSpinnerService, private service:Services, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    this.captchaImage = this.botService.bankLoad.captchaImage;
    const currentUser: any = await this.service.currentUser;
    this.isMerchant = currentUser.merchant;
  }

  async submit() {    
    this.botService.form.captchaText = this.captchaText;
    let res: any;    

    try {
      this.spinner.show();

      res = await this.botService.doLoginStep3()
      console.log("doLoginStep3:", res); 
      if (res["ok"] != true || res["result"]["loggedIn"] == false)
        throw new Error();

      this.botService.loggedIn = true;

      res = await this.botService.doPerformXfer();
      console.log("doPerformXfer:", res);        
      if (res["ok"] != true || res["result"]["error"] != undefined)
        throw new Error();

      if (res["result"]["otpRequired"] == true) {
        this.spinner.hide();
        this.router.navigate(['bankload-otp2']);
      }
      else {  // TODO: Repetitive code! {rwa}
        // if (res["result"]["confirmRequired"] == true) {
        //   let opts = { "otpRequired": false };
        //   res = await this.botService.doConfirmTxn(opts);
        //   console.log("doConfirmTxn", res);

        //   if (res["ok"] != true)
        //     throw new Error();
        // }
        
        res = await this.botService.doGetTxnStatus();
        console.log("doGetTxnStatus:", res);
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
        console.log("doLogout:", res);

        this.spinner.hide();
  
        const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['dashboard']);
        });   
      }         
    } catch (e) {
      console.log(e);
           
      // Quit the driver
      res = await this.botService.doLogout(); 
      console.log("doLogout:", res);
      this.spinner.hide();
       
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });
   }
  } 

}
