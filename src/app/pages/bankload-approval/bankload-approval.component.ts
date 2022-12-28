import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Botv2Service } from 'src/app/services/botv2.service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-bankload-approval',
  templateUrl: './bankload-approval.component.html',
  styleUrls: ['./bankload-approval.component.css']
})
export class BankloadApprovalComponent implements OnInit {
  ack: boolean;
  otp: string;
  isMerchant:boolean;

  constructor(private botService: Botv2Service, private router: Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ack = false;
  }

  async submit() {
    let res: any;

    try {
      this.spinner.show();

      this.botService.form.otp = "";
      res = await this.botService.doConfirmTxn(false);

      if (res["ok"] != true)
        throw new Error(res["error"]);
    
      Utility.log("Calling handleDoGetTxnStatus...");
      await this.botService.handleDoGetTxnStatus(this.router, this.spinner, this.dialog);
      Utility.log("handleDoGetTxnStatus completed.");
      
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

  chkChanged() {
    (<HTMLInputElement>document.getElementById('continue')).disabled = this.ack;
  }
}
