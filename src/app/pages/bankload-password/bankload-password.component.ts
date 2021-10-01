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
  styleUrls: ['./bankload-password.component.scss']
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
      // console.log(res); 
      this.botService.loggedIn = true;

      res = await this.botService.doGotoXferPage();
      // console.log(res);
  
      res = await this.botService.doFillXferForm();
      // console.log(res);

      // this.spinner.hide(); 

      if (res["result"]["errored"] == true) {
        throw new Error("User already logged in");
      }
      else if (res["result"]["tacRequired"] == true) {
        this.spinner.hide();
        this.router.navigate(['bankload-confirm']);
      }
      else {  // TODO: Repetitive code! {rwa}
        res = await this.botService.doGetTxnStatus();
        // console.log(res);
  
        await this.botService.doLogout();      
        this.spinner.hide();
  
        let statusMessage: string;
        // Display final status
        if (res["result"]["completed"] == true ) {
          const ref = res["result"]["bank_reference"];
          statusMessage = `You have successfully loaded RM${this.botService.form.amount.toFixed(2)} into your wallet account (REF: ${ref}).`;
        } else {
          statusMessage = "There was an error processing your request. Please try again.";
        }
  
        const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: statusMessage } });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['dashboard']);
        });   
      }         
    } catch (e) {
      console.log(e);
           
      // Quit the driver
      await this.botService.doLogout();
      this.spinner.hide();
       
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      })
   }
  }  
}
