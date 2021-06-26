import { Component, OnInit } from '@angular/core';
import { BotService } from '../../services/bot.service';

@Component({
  selector: 'app-cimbbank-details',
  templateUrl: './cimbbank-details.component.html',
})
export class CimbbankDetailsComponent implements OnInit {
  username: string;
  pwd: string;
  botService: BotService;

  constructor(botService: BotService) { 
    this.botService = botService 
  }

  ngOnInit(): void {
  }

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
    console.log("Logging in..")
    this.botService.sendLoginRequest()
      .subscribe(res => {
        console.log("Logged in.")
        console.debug(res)

        $this.doTransfer()
      })
  }

  doTransfer(): void {
    console.log("Requesting transfer to KOMEPS..")
    this.botService.sendDoTransferRequest({
      amount: "1.00",
      description: "10101"
    }).subscribe(res => {
      console.log("Transfer requested successfully. Please enter TAC")
    })
  }
}
