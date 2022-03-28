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
      this.banks[0] = res[0]    // MAYBANK
      this.banks[1] = res[1]    // CIMB BANK
      this.banks[2] = res[2]; this.banks[2]["disabled"] = true;     // RHB BANK
      this.banks[3] = res[3]    // BANK RAKYAT
      this.banks[4] = res[4]    // PUBLIC BANK
      this.banks[5] = res[5]    // AGRO BANK
      this.banks[6] = res[6]    // BANK ISLAM
      this.banks[7] = res[7]; this.banks[7]["disabled"] = true;     // AFFIN
      this.banks[8] = res[8]; this.banks[8]["disabled"] = true;     // RAJHI
      this.banks[9] = res[9]    // ALLIANCE
      this.banks[10] = res[10]; this.banks[10]["disabled"] = true;  // AMBANK
      this.banks[11] = res[11]  // MUAMALAT
      this.banks[12] = res[12]  // BSN
      this.banks[13] = res[13]; this.banks[13]["disabled"] = true;  // CITIBANK
      this.banks[14] = res[14]; this.banks[14]["disabled"] = true;  // HLB
      this.banks[15] = res[15]; this.banks[15]["disabled"] = true;  // HSBC
      this.banks[16] = res[16]; this.banks[16]["disabled"] = true;  // KFH
      this.banks[17] = res[17]  // OCBC
      this.banks[18] = res[18]; this.banks[18]["disabled"] = true;  // SCB
      this.banks[19] = res[19]; this.banks[19]["disabled"] = true;  // UOB

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
      // this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {
      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber")?.value;
    },
    (err) => {
      console.log(err);
      // this.service.logout();
    });
  }
  async doUpdateBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //console.log("click confirm");
    this.spinner.show();
    var err:boolean = false;
    var nameLen:Number = bankFormAccName.length; 
    for(var i = 0; nameLen > i;i++){
      if(!isNaN(parseInt(bankFormAccName.charAt(i)))){
        this.ngPopups.alert('Oops, please re-enter your bank account name.')
        this.spinner.hide();
        return;
      }
    }
    var numberLen:Number = bankFormAccNumber.length; 
    for(var i = 0; numberLen > i;i++){
      if(isNaN(parseInt(bankFormAccNumber.charAt(i)))){
        this.ngPopups.alert('Oops, please re-enter your bank account number.')
        this.spinner.hide();
        return;
      }
    }
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
