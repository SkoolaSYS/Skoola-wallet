import { Component, OnInit } from '@angular/core';
import { BotService } from '../../services/bot.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html'
})
export class WithdrawComponent implements OnInit {
  transferDate: string;
  transferAmount: string;
  transferDesc: string;
  otp: string;
  botService: BotService;

  constructor(botService: BotService) {
    this.botService = botService
  }

  ngOnInit(): void {
  }

  doWibt(): void {
    let $this = this
    this.botService.sendInitRequest({
      credentials: {
        username: 'khunhannan92',
        password: 'ninibijak87'
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
    console.log("Requesting transfer to USER..")
    this.botService.sendDoWithdrawRequest({
      amount: this.transferAmount,
      description: this.transferDesc
    }).subscribe(res => {
      console.log("Transfer requested successfully. Please enter TAC")
    })
  }

  enterTac(): void {
    let $this = this
    console.log("TAC sent.")
    this.botService.sendTacRequest({
      tac: $this.otp
    }).subscribe(res => {
      console.log("WIBT is completed!")
    })
  }

}
