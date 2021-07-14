
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html'
})
export class AddBankComponent implements OnInit {
  banks:any = [];
  bankFormCountry = "MY";
  bankFormName = null;
  constructor(private services:Services, private ngPopups: NgPopupsService, private router:Router) { }

  ngOnInit(): void {
    this.services.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks = res;
      //console.log(this.banks);
    });
  }
  
  async doAddBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //console.log("click confirm");
    if (bankFormName != null && bankFormAccName != null && bankFormAccNumber != null){
      await this.services.sendAddBank({
      bank: bankFormName,
      bankAccName: bankFormAccName,
      bankAccNumber: bankFormAccNumber
    }).toPromise(); 
  }}
}

