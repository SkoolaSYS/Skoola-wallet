import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Services } from './service';
import { TRANSACTION_TYPE, Utility } from 'src/utils';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
const AES256  = require('aes-everywhere');

@Injectable({
  providedIn: 'root'
})
export class Botv2Service {
  public isTopup:boolean;
  public form: any = {};
  public httpHeaders: HttpHeaders;
  public workerId: string;
  public loggedIn: boolean = false;
  public bankLoad: any = {};
  public botAuth: string;
  public encryption_key: string;

  constructor(private services: Services, private httpClient: HttpClient) {
    services.getBotAuthorization().then(res => {
      this.botAuth = res["auth"];
    }).catch(err => {
      Utility.error("Error getting bot authorization.")
    })
  }

  encrypt(text: string) {

    let encrypted = AES256.encrypt(text, this.encryption_key)

    return encrypted;
  }

  get_BOT_SESSION_ID() {

    let param_in_BODY = { 
        "flow": "NONE", 
        "action": "get_session_id", 
        "Authorization": this.botAuth 
      };
    const body = JSON.stringify(param_in_BODY); 
    return this.httpClient.post("/d8p-opg/get_session_id.do", 
      body, { headers: { "Content-Type": "application/json" } }).pipe(tap(res => {
        Utility.log("get_BOT_SESSION_ID: " + JSON.stringify(res));
      })).toPromise();
  }

  doLoginStep0(){
    //https://lokarithm.com/2020/12/30/angular-post-request-with-header-body-and-parameters/
    var FLOW = this.bankLoad.fromBank; // [ ] from bankload-amount.component.ts // https://www.codegrepper.com/code-examples/javascript/how+to+store+data+in+session+typescript    
    var AUTHORIZATION = this.botAuth; // [ ] from bankload-amount.component.ts // https://www.codegrepper.com/code-examples/javascript/how+to+store+data+in+session+typescript    
 
    let param_in_BODY = { "flow": FLOW, "action": "login_step_0", "Authorization":AUTHORIZATION } ; //"flow": "pbb"    
    const body = this.encrypt(JSON.stringify( param_in_BODY )); //const body=JSON.stringify(myObject);    
    return this.httpClient.post("/d8p-opg/paynet.do", body, 
    { headers: { "Content-Type": "application/json" } }).pipe(tap(res => {
      Utility.log("doLoginStep0: " + JSON.stringify(res));
    })).toPromise();
  }    

  doLoginStep1(){
    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "login_step_1",
      "username": this.form.username,
      "Authorization":this.botAuth
    }
    const body = this.encrypt(JSON.stringify( data ));
    return this.httpClient.post("/d8p-opg/paynet.do", 
      body, { headers: { "Content-Type": "application/json"} }
    ).pipe(tap(res => {
      Utility.log("doLoginStep1: " + JSON.stringify(res));
    })).toPromise();
  }

  doLoginStep2(){
    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "login_step_2",
      "password": this.form.password,
      "Authorization":this.botAuth
    }
    const body = this.encrypt(JSON.stringify( data ));
    return this.httpClient.post("/d8p-opg/paynet.do", 
      body, { headers: { "Content-Type": "application/json"} }
    ).pipe(tap(res => {
      Utility.log("doLoginStep2: " + JSON.stringify(res));
    })).toPromise();    
  }

  doLoginStep3(answer: string){
    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "login_step_3",
      "answer": answer,
      "Authorization":this.botAuth
    }
    const body = this.encrypt(JSON.stringify( data ));
    return this.httpClient.post("/d8p-opg/paynet.do", 
      body, { headers: { "Content-Type": "application/json"} }
    ).pipe(tap(res => {
      Utility.log("doLoginStep3: " + JSON.stringify(res));
    })).toPromise();    
  }

  async handleDoPerformTransfer(router: Router, spinner: NgxSpinnerService, dialog: MatDialog) {
    let res: any;

    res = await this.doPerformXfer();

    if (res["ok"] == false) {
      throw new Error(res["error"]);
    }
    else if (res["result"]["approvalRequired"] == true) {
      spinner.hide();
      router.navigate(["bankload-approval"]);
    }
    else if (res["result"]["otpRequired"] == true) {
      spinner.hide();

      console.assert(res["result"]["next"] != undefined, "No valid 'next' endpoint specified.");

      this.bankLoad.next = res["result"]["next"];  // doConfirmTxn | doFillXferForm
      router.navigate(['bankload-otp']);
    }
    else {
      Utility.log("Calling handleDoGetTxnStatus...");
      await this.handleDoGetTxnStatus(router, spinner, dialog);
      Utility.log("handleDoGetTxnStatus completed.");
    }
  }

  async handleDoGetTxnStatus(router: Router, spinner: NgxSpinnerService, dialog: MatDialog) {
    let res: any;
    let statusMessage: string;

    res = await this.doGetTxnStatus();
    
    // Display final status
    if (res["ok"] == true ) {
      const ref = res["result"]["bankReference"];
      statusMessage = `You have successfully loaded RM${this.form.amount.toFixed(2)} into your wallet account (REF: ${ref}).`;
    } else {
      statusMessage = "There was an error processing your request. Please try again.";
    }   

    res = await this.doLogout(); 
    spinner.hide();

    const dialogRef = dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
    dialogRef.afterClosed().subscribe(() => {
      router.navigate(['dashboard']);
    });   
  }

  async handleDoLoginFn(router: Router, spinner: NgxSpinnerService, dialog: MatDialog, fn: string, arg: string = "") {
    let res: any;

    if (fn == "doLoginStep2")
      res = await this.doLoginStep2();
    else if (fn == "doLoginStep3")
      res = await this.doLoginStep3(arg);
    else
      throw new Error("Invalid login function.");
      
    if (res["ok"] != true)
      throw new Error(res["error"]);

    if (res["result"]["loggedIn"] == "true") {
      this.loggedIn = true;

      Utility.log("Calling handleDoPerformTransfer...");
      await this.handleDoPerformTransfer(router, spinner, dialog);
      Utility.log("handleDoPerformTransfer completed.");
    }
    else if ([ "false", "invalid"].some((e) => e == res["result"]["loggedIn"])) {
      // handle invalid login error   
      res = await this.doQuit();

      spinner.hide();

      const dialogRef = dialog.open(AlertDialogComponent, { data: { message: "Invalid login. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        router.navigate(['bankload-username']);
      });
    }
    else if (res["result"]["otpRequired"] == true) {
      spinner.hide();

      console.assert(res["result"]["next"] != undefined, "No valid 'next' endpoint specified.");

      this.bankLoad.next = res["result"]["next"];  // doLoginStep3
      router.navigate(['bankload-otp']);     
    }
    else if (res["result"]["captchaRequired"] == true) {
      spinner.hide();

      console.assert(res["result"]["next"] != undefined, "No valid 'next' endpoint specified.");

      this.bankLoad.next = res["result"]["next"];  // doLoginStep3
      this.bankLoad.captchaImage = res["result"]["captchaImage"];
      router.navigate(['bankload-captcha']);     
    }
  }

  async doPerformXfer() {
    // TODO: This will later be replaced by order number generated by CBS
    var transferType;
    if (this.isTopup)
      transferType = 34
    else
      transferType = 14

    const TFR_ORDERNUM = {
      "accountId": this.services.userAccount.id, 
      "amount": this.form.amount, 
      "description": "D8P", 
      "transactionTypeId": TRANSACTION_TYPE.BankLoad,
      "transferTypeId": transferType,
      "bank":this.bankLoad.fromBank,
      "fromaccount":this.bankLoad.fromAccount
    };

    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "perform_xfer",
      "amount": (this.form.amount + this.bankLoad.transactionFee).toFixed(2).toString(),
      "fromaccount": this.bankLoad.fromAccount,
      "TFR_ORDERNUM": TFR_ORDERNUM,
      "Authorization": this.botAuth
    }

    const body = this.encrypt(JSON.stringify( data ));
    return this.httpClient.post("/d8p-opg/paynet.do", body, { headers: { "Content-Type": "application/json"} }
    ).pipe(tap(res => {
      Utility.log("doPerformXfer: " + JSON.stringify(res));
    })).toPromise();    
  }

  async doFillXferForm() {
    var transferType;
    if (this.isTopup)
      transferType = 34
    else
      transferType = 14

    const TFR_ORDERNUM = {
      "accountId": this.services.userAccount.id, 
      "amount": this.form.amount, 
      "description": "D8P", 
      "transactionTypeId": TRANSACTION_TYPE.BankLoad,
      "transferTypeId": transferType,
      "bank": this.bankLoad.fromBank,
      "fromaccount": this.bankLoad.fromAccount
    };

    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "fill_xfer_form",
      "xotp": "000000", // TODO
      "amount": (this.form.amount + this.bankLoad.transactionFee).toString(),
      "fromaccount": this.bankLoad.fromAccount,
      // "TFR_ORDERNUM": TFR_ORDERNUM,
      "Authorization": this.botAuth
    }

    return this.httpClient.post("/d8p-opg/paynet.do", data, { headers: { "Content-Type": "application/json"} }
    ).pipe(tap(res => {
      Utility.log("doFillXferForm: " + JSON.stringify(res));
    })).toPromise();    
  }

  doConfirmTxn(otp: boolean) {
    let data: any = {
      "flow": this.bankLoad.fromBank,
      "action": "confirm_txn",
      "otp": this.form.otp.toString(),
      "Authorization":this.botAuth
    }

    const body = this.encrypt(JSON.stringify( data ));
    return this.httpClient.post("/d8p-opg/paynet.do", 
      body, { headers: { "Content-Type": "application/json"} }
    ).pipe(tap(res => {
      Utility.log("doConfirmTxn: " + JSON.stringify(res));
    })).toPromise();    
  }
  
  doGetTxnStatus() {
    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "get_txn_status",
      "Authorization":this.botAuth
    }
    const body = this.encrypt(JSON.stringify( data ));
    return this.httpClient.post("/d8p-opg/paynet.do", 
      body, { headers: { "Content-Type": "application/json"} }
    ).pipe(tap(res => {
      Utility.log("doGetTxnStatus: " + JSON.stringify(res));
    })).toPromise();  
  }

  async doLogout() {
    Utility.log("Logging out...");

    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "logout",
      "Authorization":this.botAuth
    }
    const body = this.encrypt(JSON.stringify( data ));

    if (this.loggedIn) {
      return this.httpClient.post("/d8p-opg/paynet.do", 
        body, { headers: { "Content-Type": "application/json"} }
      ).toPromise()
      .then(async (res) => {
        Utility.log("doLogout: " + JSON.stringify(res));
      })
      .catch(async (err) => {
        Utility.error(err); 
      })
      .finally(async () => {
        // Finally quit the driver
        await this.doQuit();
      })
    }
    else {
      // Finally quit the driver
      await this.doQuit();
    }
  }

  doQuit() {
    Utility.log("Quitting...");

    const data = {
      "flow": this.bankLoad.fromBank,
      "action": "quit",
      "Authorization":this.botAuth
    }
    const body = this.encrypt(JSON.stringify( data ));

    return this.httpClient.post("/d8p-opg/paynet.do", body, { headers: { "Content-Type": "application/json" }} 
    ).pipe(tap(res => {
      Utility.log("doQuit: " + JSON.stringify(res));
    })).toPromise();
  }

  doWithdraw(params:any) {
    const bankData = params.bank
    
    const TFR_ORDERNUM = {
      "accountId": this.services.userAccount.id, 
      "amount": params.amount, 
      "description": params.desc, 
      "transactionTypeId": TRANSACTION_TYPE.Withdraw  
    };

    const data = {
      "bank": bankData.id.toString(),
      "beneficiary": bankData.bankAccName,
      "beneid": params.nationalId,
      "email": params.email,
      "toaccount": bankData.bankAccNumber,
      "amount": params.amount.toString(),
      "ordernum": JSON.stringify(TFR_ORDERNUM)
      }

    return this.httpClient.post("/withdrawals",data, { headers: { "Content-Type": "application/json"} }
    ).toPromise();
  }
}