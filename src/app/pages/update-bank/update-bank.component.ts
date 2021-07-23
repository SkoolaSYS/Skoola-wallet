import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html'
})
export class UpdateBankComponent implements OnInit {
  banks:any = [];
  bankData:any = [];
  bankFormCountry = "MY";
  bankFormName = null;
  bankFormAccName;
  bankFormAccNumber;
  constructor(private services:Services, private ngPopups: NgPopupsService, private router:Router) { }

  ngOnInit(): void {
    this.services.getBankDataMember().subscribe((res: any) => {
      this.bankData = res;
      this.bankFormName = this.bankData.bankId
      this.bankFormAccName = this.bankData.bankAccName
      this.bankFormAccNumber= this.bankData.bankAccNumber
      //console.log(res);
  });
    this.services.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks = res;
  });

}
  async doUpdateBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //console.log("click confirm");
    if (bankFormName != null && bankFormAccName != null && bankFormAccNumber != null){
      await this.services.sendUpdateBank({
      bankId: bankFormName,
      bankAccName: bankFormAccName,
      bankAccNumber: bankFormAccNumber
    }).toPromise(); 
  }}
}

