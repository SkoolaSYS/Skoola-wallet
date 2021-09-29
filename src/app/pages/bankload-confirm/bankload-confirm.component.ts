import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-bankload-confirm',
  templateUrl: './bankload-confirm.component.html',
  styleUrls: ['./bankload-confirm.component.scss']
})
export class BankloadConfirmComponent implements OnInit {
  tac: string;

  constructor(private botService: Botv2Service, private router: Router, 
              private ngPopups: NgPopupsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.hide();
  }

  async submit() {
    this.botService.form.tac = this.tac;
    let res: any;   

    try {
      this.spinner.show();

      res = await this.botService.doConfirmTxn();
      // console.log(res);
      
      res = await this.botService.doGetTxnStatus();
      // console.log(res);

      // Display final status
      if (res["result"]["completed"] == true ) {
        let ref = res["result"]["bank_reference"];
        this.ngPopups.alert(`You have successfully loaded RM${this.botService.form.amount.toFixed(2)} into your wallet account (REF: ${ref}).`);
      }
      else {
        this.ngPopups.alert("Your request was unsuccessful. Please try again later.")
      }
    }
    catch (e) {
      console.log(e);
      this.ngPopups.alert("There was an error processing your request. Please try again.")
    }
    finally {
      // It's all over, so quit the driver
      await this.botService.doLogout();
      
      this.spinner.hide();
      this.router.navigate(['dashboard']);
    }
  }
}
