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
  selector: 'app-bankload-password',
  templateUrl: './bankload-password.component.html',
  styleUrls: ['./bankload-password.component.css']
})
export class BankloadPasswordComponent implements OnInit {
  secureImage: string;
  secretPhrase: string;
  password: string;
  ack: boolean;
  hide: boolean = true;
  isMerchant:boolean;

  constructor(private botService: Botv2Service, private router: Router, 
              private ngPopups: NgPopupsService, private spinner: NgxSpinnerService, private dialog: MatDialog, private services: Services) { }

 async ngOnInit(): Promise<void> {
    this.spinner.hide();
    this.ack = false;
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant;

    if (this.botService.form.secretPhrase != undefined)
      this.secretPhrase = this.botService.form.secretPhrase;
    this.secureImage = this.botService.form.secureImage;
  }

  chkChanged() {
    if (this.ack == true) {
      this.password = "";
      this.hide = false;
      this.togglePassword(); 
    }
    
    (<HTMLInputElement>document.getElementById('password')).disabled = this.ack;
    (<HTMLInputElement>document.getElementById('login')).disabled = this.ack;
  }

  togglePassword(){
    this.hide = !this.hide;

    if (!this.hide) {
      document.getElementById("togglePassword").setAttribute("class", "bi-eye");
    } else {
      document.getElementById("togglePassword").setAttribute("class", "bi-eye-slash");
    }
  }

  async submit() {    
    this.botService.form.password = this.password;
    let res: any;    

    try {
      this.spinner.show();

      this.botService.loggedIn = false;
      res = await this.botService.doLoginStep2()
      //Utility.log("doLoginStep2:", res); 
      
      if (res["result"]["loggedIn"] == "false") {
        throw new Error();
      }
      else if (res["result"]["loggedIn"] == "invalid") {
        // handle invalid login error   
        res = await this.botService.doQuit();
        this.spinner.hide();

        const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "Invalid login. Please try again." } });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['bankload-username']);
        });
      }
      else if (res["result"]["captchaRequired"] == "true") {
        this.spinner.hide();

        this.botService.bankLoad.captchaImage = res["result"]["captchaImage"];
        this.router.navigate(['bankload-captcha']);     
      }
      else {
        // loggedIn must be true
        //Utility.log('after login step 2')
        this.botService.loggedIn = true;

        res = await this.botService.doPerformXfer();
        //Utility.log("doPerformXfer:", res);        
        // if (res["ok"] != true || res["result"]["error"] != undefined)
        //   throw new Error();
  
        if (res["result"]["xotpRequired"] == "true") {
          this.spinner.hide();
          this.router.navigate(['bankload-xotp']);
        }
        else if (res["result"]["otpRequired"] == "true") {
          //Utility.log("otpRequired")
          this.spinner.hide();
          this.router.navigate(['bankload-otp']);
        }
        else {  // TODO: Repetitive code! {rwa}
          res = await this.botService.doGetTxnStatus();
          //Utility.log("doGetTxnStatus:", res);
          // if (res["ok"] != true)
          //   throw new Error();
    
          let statusMessage: string;
          // Display final status
          if (res["result"]["completed"] == "true" ) {
            const ref = res["result"]["bankReference"];
            statusMessage = `You have successfully loaded RM${this.botService.form.amount.toFixed(2)} into your wallet account (REF: ${ref}).`;
          } else {
            statusMessage = "There was an error processing your request. Please try again.";
          }   

          res = await this.botService.doLogout(); 
          //Utility.log("doLogout:", res);

          this.spinner.hide();
    
          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['dashboard']);
          });   
        }
      }         
    } catch (e) {
           
      // Quit the driver
      if (this.botService.loggedIn == true) {
        res = await this.botService.doLogout(); 
        //Utility.log("doLogout:", res);
      }
      else {
        res = await this.botService.doQuit(); 
        //Utility.log("doQuit:", res);        
      }
      this.spinner.hide();
       
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });
   }
  }  
}
