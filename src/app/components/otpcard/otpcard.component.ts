import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BotService } from '../../services/bot.service';

@Component({
  selector: 'app-otpcard',
  templateUrl: './otpcard.component.html'
})
export class OtpcardComponent implements OnInit {
  otp: number;
  @Output() otpSubmit: EventEmitter<any> = new EventEmitter<any>();
  botService: BotService;

  constructor(botService: BotService) {
    this.botService = botService
  }

  ngOnInit(): void {
  }

  enterTac(): void {
    let $this = this
    console.log("TAC sent.")
    this.botService.sendTacRequest({
      tac: $this.otp
    }).subscribe(res => {
      console.log("LABT is completed!")
    })
  }

}
