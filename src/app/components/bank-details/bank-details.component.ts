import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/utils';
import { BotService } from '../../services/bot.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html'
})
export class BankDetailsComponent implements OnInit {
  username: string;
  pwd: string;
  botService: BotService;

  constructor(botService: BotService) {
    this.botService = botService
  }

  ngOnInit(): void {}

  doLabt(): void {
    let $this = this
    this.botService.sendInitRequest({
      credentials: {
        username: this.username,
        password: this.pwd
      }
    }).subscribe(res => {
      if (res.status == "success")
        $this.login()
    });
  }

  login(): void {
    let $this = this
    Utility.log("Logging in..")
    this.botService.sendLoginRequest()
      .subscribe(res => {
        Utility.log("Logged in.")
        console.debug(res)

        $this.doTransfer()
      })
  }

  doTransfer(): void {
    Utility.log("Requesting transfer to KOMEPS..")
    this.botService.sendDoTransferRequest({
      amount: "1.00",
      description: "10101"
    }).subscribe(res => {
      Utility.log("Transfer requested successfully. Please enter TAC")
    })
  }
}
