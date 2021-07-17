import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../../services/service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bankload',
  templateUrl: './bankload.component.html',
})
export class BankloadComponent implements OnInit {

  // myrouterLink:string="";

  bankLuaSource: string;
  @Input() botUrl: string;
  @Input() amount: string;
  @Input() orderNum: string;
  @Input() retUrl: string;
  @Input() reference: string;
  @Input() sessionArgs: string;
  
  constructor(private service: Services, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.opsTagging = 'bankload';
    this.bankLuaSource = "maybank.login";
  }

  // setRouter(type){
  //   if(type==1){
  //     this.myrouterLink="/bankload-details"
  //   }else{
  //     this.myrouterLink="/cimb-bankload"
  //   }
  // }

  // changeRoute(){
  //   this.router.navigate([this.myrouterLink]);
  // }

    selectBank(bank){
    if (bank == 1){
      this.bankLuaSource="maybank.login"
    } else {
      // TODO: Not yet implemented
    }
  }

  async doWithdrawal() {
    const BOT_URL = "http://localhost:8000/__execute?lua_source=";
    const RETURN_URL = "http://komepsdev.ddns.net:4200/dashboard";
    const CALLBACK_URL = "http://komepsdev.ddns.net:8080/komeps/rest/payments/confirmBankLoad";
    const currentUser: any = await this.service.currentUser;

    let orderNum: any = {};
    orderNum.accountId = this.service.userAccount.id;
    orderNum.amount = this.amount
    orderNum.description = this.reference;

    let sessionArgs: any = {};
    sessionArgs.TFR_AMOUNT = parseFloat(this.amount).toFixed(2);
    sessionArgs.TFR_ORDERNUM = orderNum;
    sessionArgs.RETURL = RETURN_URL;
    sessionArgs.CBURL = CALLBACK_URL;

    this.sessionArgs = JSON.stringify(sessionArgs);
    this.botUrl = BOT_URL + this.bankLuaSource;
  }
}
