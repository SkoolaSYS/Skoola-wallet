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

      Utility.log("Calling handleDoLoginFn...");
      await this.botService.handleDoLoginFn(this.router, this.spinner, this.dialog, "doLoginStep2");
      Utility.log("handleDoLoginFn completed.");
    } 
    catch (e) {
      Utility.error(e.name + ": " + e.message);
           
      // Quit the driver
      if (this.botService.loggedIn == true) {
        res = await this.botService.doLogout(); 
      }
      else {
        res = await this.botService.doQuit(); 
      }

      this.spinner.hide();
       
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });
   }
  }  
}
