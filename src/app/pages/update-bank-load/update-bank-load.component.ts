import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-update-bank-load',
  templateUrl: './update-bank-load.component.html'
})
export class UpdateBankLoadComponent implements OnInit {
  banks:any = [];
  bankData:any = [];
  bankFormCountry = "MY";
  bankFormName;
  bankFormAccName;
  bankFormAccNumber;
  bankObject;
  i: Number;
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount
  constructor(private service: Services, private ngPopups: NgPopupsService, 
              private router: Router, private spinner: NgxSpinnerService) { }

  async ngOnInit(): Promise<void> {
    this.spinner.show();

    this.service.getMemberBankLoadData().subscribe((res: any) => {
      this.bankData = res;
      this.bankFormAccName = this.bankData.bankAccName
      this.bankFormAccNumber= this.bankData.bankAccNumber
      //console.log(res);
    });

    this.service.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks[0] = res[0]
      this.banks[1] = res[1]
      this.banks[2] = res[3]
      this.banks[3] = res[4]
      this.banks[4] = res[5]
      this.banks[5] = res[6]
      this.banks[6] = res[9]
      this.bankObject = this.banks.find(bank=>bank.name === this.bankData.bankName);
      if (this.bankObject != null){
          this.bankFormName = this.bankObject.id
      }
      //console.log(res);
    });

    this.spinner.hide();
    this.activetransaction = this.service.activetransaction;
    if (this.activetransaction === true) {
      this.transactionAmount = this.service.transactionData.amount;
      this.goldAmount = this.service.transactionData.gold;  
    }

    // this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      //console.log(res)
      this.currentBalance = res[0].status.availableBalance;
      this.service.currentBalance = this.currentBalance;
      this.currencyType = res[0].account.type.currency.symbol;

      const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(5).toString().split(".");
      this.goldWhole = sumGoldParts[0];
      this.goldFraction = sumGoldParts[1];

      this.service.userAccount = res[0].account;
    },
    (err) => {
      console.log(err);
      this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {
      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber")?.value;
    },
    (err) => {
      console.log(err);
      this.service.logout();
    });
  }
  async doUpdateBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //console.log("click confirm");
    this.spinner.show();

    if (bankFormName != null && bankFormAccName != null && bankFormAccNumber != null){
      await this.service.sendUpdateBankLoad({
      bankId: bankFormName,
      bankAccName: bankFormAccName,
      bankAccNumber: bankFormAccNumber
    }).toPromise().then(() => {
      this.spinner.hide();
      this.ngPopups.alert('Your bank details has been sucessfully updated!');
      this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.spinner.hide();
      this.ngPopups.alert('There was an error in your submission!');
    });  
  }}

}
