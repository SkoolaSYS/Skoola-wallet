import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from "ngx-spinner";

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
              private ngPopups: NgPopupsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
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
      if (res["result"]["errored"] == true)
        throw new Error("User already logged in");

      this.spinner.hide();      
      this.router.navigate(['bankload-confirm']);
    } catch (e) {
      this.spinner.hide();
      console.log(e);     
       
      this.ngPopups.alert("There was an error processing your request. Please try again.")       
      
      // Quit the driver
      await this.botService.doLogout();      
      this.router.navigate(['dashboard']);
   }
  }  
}
