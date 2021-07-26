import { Component, OnInit } from '@angular/core';
import { BotService } from '../../services/bot.service';
import { Services } from 'src/app/services/service';

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
  bankData: any;
  bankFormCountry = "MY";
  banks:any;
  bankAccName: string;
  bankAccNumber: string;
  bankName: string;

  constructor(botService: BotService , private service:Services) {
    this.botService = botService
  }

  ngOnInit(): void {
    this.service.getBankDataMember().subscribe((res: any)=>{
      this.bankData = res;
      this.bankAccName = this.bankData.bankAccName;
      this.bankAccNumber = this.bankData.bankAccNumber;
      console.log(this.bankData);
    },
    (err) => {
      console.log(err);
    });
    this.service.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks = res;
      this.bankName =this.banks[this.bankData.bankId - 1].name;
      console.log(this.banks);
    });
  }

  doWibt(): void {
    let $this = this
    this.botService.sendInitRequest({
      credentials: {
        username: '',
        password: ''
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
