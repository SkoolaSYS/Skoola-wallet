import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-bankload-username',
  templateUrl: './bankload-username.component.html',
  styleUrls: ['./bankload-username.component.scss']
})
export class BankloadUsernameComponent implements OnInit {
  username: string;
  isMerchant: boolean;

  constructor(private botService: Botv2Service, private router: Router, private ngPopups: NgPopupsService, 
              private spinner: NgxSpinnerService, private dialog: MatDialog, private services: Services) { }

  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant;
  } 

  async submit() {
    this.botService.form.username = this.username;
    let res: any

    try {
      this.spinner.show();
      await this.botService.login_step_0().subscribe(async (res:any[]) => {
        var RESULT = res[0];      
        if (RESULT == "login_step_0_PASSED"){
          //alert("res_index="+res_index);
          let res_login_step_1:any = await this.botService.doLoginStep1()
            let res_index = JSON.parse( JSON.stringify(res_login_step_1) );
            console.log("doLoginStep1:", res_login_step_1); 
            if (res_index["0"] != "login_step_1_PASSED")
              throw new Error();

            this.botService.form.secureImage = res_index["1"];
            this.botService.form.secretPhrase = res_index["2"];
            
            this.spinner.hide();
            this.router.navigate(['bankload-password']);
         
          
        }else{
          alert("[login_step_0]RESULT="+RESULT);  
          alert("[login_step_0]res="+res);  
        }
      });         
        
    } catch (e) {
      console.log(e);    
      
      // Quit the driver
      
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });
    }
  }
}
