import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Botv2Service } from 'src/app/services/botv2.service';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-bankload-amount',
  templateUrl: './bankload-amount.component.html',
  styleUrls: ['./bankload-amount.component.scss']
})
export class BankloadAmountComponent implements OnInit {
  
  amount: string;

  constructor(private services: Services, private botService: Botv2Service, private router: Router) {}

  ngOnInit(): void {
    this.services.getMemberBankLoadData().subscribe((res: any) => {
      this.botService.fromBank = getBankFlow(res["bankName"]);
      this.botService.fromAccount = res["bankAccNumber"];
    });
  }

  submit() {
    this.botService.form.amount = this.amount;
    console.log(this.botService.form.amount);
    
    this.router.navigate(['bankload-username']);    
  }
}

function getBankFlow(bankName: string): string {
  // TODO: Match should be done based on bank codes from CBS
  let banks = new Map([
    ["MAYBANK", "maybank"],
    ["CIMB BANK", "cimb"],
    ["BANK ISLAM", "bimb"],
    ["AGRO BANK", "agro"],
    ["PUBLIC BANK", "public"]
  ]);

  return banks.get(bankName);
}
