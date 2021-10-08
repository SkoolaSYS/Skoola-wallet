import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-bankload-username',
  templateUrl: './bankload-username.component.html',
  styleUrls: ['./bankload-username.component.scss']
})
export class BankloadUsernameComponent implements OnInit {
  username: string;

  constructor(private botService: Botv2Service, private router: Router, private ngPopups: NgPopupsService, 
              private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinner.hide();
  } 

  async submit() {
    this.botService.form.username = this.username;

    try {
      let res: any
      
      this.spinner.show();

      if (sessionStorage.getItem("worker_id") != null)
        await this.botService.doQuit();

      res = await this.botService.doInitialize();
      // console.log("doInitialize:", res); 

      this.botService.workerId = res["worker-id"];
      sessionStorage.setItem("worker_id", res["worker-id"])
      
      // Check if native helper app is already installed and running
      res = await this.botService.doHealthCheck();
      // console.log("doHealthCheck:", res);    
      const proxyReady = res["proxy"]["connected"] == true && res["proxy"]["ready"] == true;
      
      // TODO: Remove false condition
      if (false && !proxyReady) {
        await this.botService.doQuit();
        this.spinner.hide();

        this.router.navigate(["bankload-helper"]);
        return false;
      }   

      res = await this.botService.doLoginStep1();
      console.log("doLoginStep1:", res); 
      if (res["ok"] != true)
        throw new Error();

      this.botService.form.secretPhrase = res["result"]["secretPhrase"];
      this.botService.form.secureImage = res["result"]["secureImage"];

      this.spinner.hide();
      this.router.navigate(['bankload-password']);
    } catch (e) {
      console.log(e);    
      
      // Quit the driver
      await this.botService.doQuit();
      this.spinner.hide();      
      
      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      })
    }
  }
}
