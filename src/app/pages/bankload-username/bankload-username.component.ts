import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Botv2Service } from 'src/app/services/botv2.service';

@Component({
  selector: 'app-bankload-username',
  templateUrl: './bankload-username.component.html',
  styleUrls: ['./bankload-username.component.scss']
})
export class BankloadUsernameComponent implements OnInit {
  username: string;

  constructor(private botService: Botv2Service, private router: Router, private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
  }

  async submit() {
    this.botService.form.username = this.username;

    try {
      let res: any
      
      res = await this.botService.doInitialize();
      console.log(res);
      this.botService.workerId = res["worker-id"];
      // this.botService.httpHeaders = this.botService.httpHeaders.set("Worker-Id", res["worker-id"]);
      
      res = await this.botService.doLoginStep1();
      console.log(res);

      this.botService.form.secretPhrase = res["result"]["secretPhrase"];
      this.botService.form.secureImage = res["result"]["secureImage"];

      this.router.navigate(['bankload-password']);
    } catch (e) {
      console.log(e);    
      this.ngPopups.alert("There was an error processing your request. Please try again.")
      this.router.navigate(['dashboard']);
      
      // quit the driver
      this.botService.doQuit();
    }
  }

}
