import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-bankload-password',
  templateUrl: './bankload-password.component.html',
  styleUrls: ['./bankload-password.component.css']
})
export class BankloadPasswordComponent implements OnInit {
  secureImage: string;
  secretPhrase: string;
  password: string;
  ack: boolean;

  constructor(private botService: Botv2Service, private router: Router, 
              private ngPopups: NgPopupsService, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinner.hide();
    this.ack = false;

    if (this.botService.form.secretPhrase != undefined)
      this.secretPhrase = this.botService.form.secretPhrase;
    this.secureImage = this.botService.form.secureImage;
  }

  chkChanged() {
    if (this.ack == true)
      (<HTMLInputElement>document.getElementById('password')).value = "";  

    (<HTMLInputElement>document.getElementById('password')).disabled = this.ack;
    (<HTMLInputElement>document.getElementById('login')).disabled = this.ack;
  }

  async submit() {    
    this.botService.form.password = this.password;
    let res: any;    

    try {
      this.spinner.show();

      res = await this.botService.doLoginStep2()
      console.log("doLoginStep2:", res); 
      if (res["ok"] != true || res["result"]["loggedIn"] == false) {
        throw new Error();      
      }
      else if (res["result"]["captchaRequired"] == true) {
        this.spinner.hide();

        this.botService.bankLoad.captchaImage = res["result"]["captchaImage"];
        this.router.navigate(['bankload-captcha']);     
      }
      else {
        // loggedIn must be true
        this.botService.loggedIn = true;

        res = await this.botService.doGotoXferPage();
        console.log("doGotoXferPage:", res);
        if (res["ok"] != true)
          throw new Error();

        res = await this.botService.doFillXferForm();
        console.log("doFillXferForm:", res);
        if (res["ok"] != true)
          throw new Error();

        if (res["result"]["tacRequired"] == true) {
          this.spinner.hide();
          this.router.navigate(['bankload-confirm']);
        }
        else {  // TODO: Repetitive code! {rwa}
          if (res["result"]["confirmRequired"] == true) {
            let opts = { "tacRequired": false };
            res = await this.botService.doConfirmTxn(opts);
            console.log("doConfirmTxn", res);

            if (res["ok"] != true)
              throw new Error();
          }
          
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
      }         
    } catch (e) {
      console.log(e);
           
      // Quit the driver
      await this.botService.doLogout();
      this.spinner.hide();
       
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });
   }
  }  
}
