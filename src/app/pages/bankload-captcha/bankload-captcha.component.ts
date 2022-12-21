import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Botv2Service } from 'src/app/services/botv2.service';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

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

      if (this.botService.bankLoad.next == "doLoginStep3") {

        Utility.log("Calling handleDoLoginFn...");
        await this.botService.handleDoLoginFn(this.router, this.spinner, this.dialog, "doLoginStep3", this.botService.form.captchaText);
        Utility.log("handleDoLoginFn completed.");
      }
      else {
        // handle other cases
        Utility.log("Not supported 'next' action.")
      }
    } 
    catch (e) {
      Utility.error(e.name + ": " + e.message);
           
      // Quit the driver
      res = await this.botService.doLogout(); 
      this.spinner.hide();
       
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });
   }
  } 
}
