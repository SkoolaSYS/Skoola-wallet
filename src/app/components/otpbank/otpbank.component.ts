import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Utility } from 'src/utils';
import { BotService } from '../../services/bot.service';
import { Services } from '../../services/service';

@Component({
  selector: 'app-otpbank',
  templateUrl: './otpbank.component.html'
})
export class OtpbankComponent implements OnInit {
  otp: number;
  @Output() otpSubmit: EventEmitter<any> = new EventEmitter<any>();
  botService: BotService;
  private opsTagging: string;
  
  constructor(botService: BotService, private service: Services) {
    this.botService = botService
  }

  ngOnInit(): void {
    this.opsTagging = this.service.opsTagging;
  }

  enterTac(): void {
    let $this = this
    Utility.log("TAC sent.")
    this.botService.sendTacRequest({
      tac: $this.otp
    }).subscribe(res => {
      Utility.log("LABT is completed!")
    })
  }

}
