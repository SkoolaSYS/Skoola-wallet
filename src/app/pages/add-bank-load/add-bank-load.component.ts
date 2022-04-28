import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-add-bank-load',
  templateUrl: './add-bank-load.component.html'
})
export class AddBankLoadComponent implements OnInit {
  banks:any = [];
  bankFormCountry = "MY";
  bankFormName = null;
  bankFormAccName;
  bankFormAccNumber;
  fromBankLoad: boolean;
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount

  constructor(private service:Services, private ngPopups: NgPopupsService, private router:Router, 
              private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks[0] = res[0]    // MAYBANK
      this.banks[1] = res[1]    // CIMB BANK
      this.banks[2] = res[2]; this.banks[2]["disabled"] = true;     // RHB BANK
      this.banks[3] = res[3]; this.banks[3]["disabled"] = true;      // BANK RAKYAT
      this.banks[4] = res[4]    // PUBLIC BANK
      this.banks[5] = res[5]    // AGRO BANK
      this.banks[6] = res[6]    // BANK ISLAM
      this.banks[7] = res[7]; this.banks[7]["disabled"] = true;     // AFFIN
      this.banks[8] = res[8]; this.banks[8]["disabled"] = true;     // RAJHI
      this.banks[9] = res[9]; this.banks[9]["disabled"] = true;      // ALLIANCE
      this.banks[10] = res[10]; this.banks[10]["disabled"] = true;  // AMBANK
      this.banks[11] = res[11];    // MUAMALAT
      this.banks[12] = res[12]; this.banks[12]["disabled"] = true; // BSN
      this.banks[13] = res[13]; this.banks[13]["disabled"] = true;  // CITIBANK
      this.banks[14] = res[14]; this.banks[14]["disabled"] = true;  // HLB
      this.banks[15] = res[15]; this.banks[15]["disabled"] = true;  // HSBC
      this.banks[16] = res[16]; this.banks[16]["disabled"] = true;  // KFH
      this.banks[17] = res[17]  // OCBC
      this.banks[18] = res[18]; this.banks[18]["disabled"] = true;  // SCB
      this.banks[19] = res[19]; this.banks[19]["disabled"] = true;  // UOB
    });   
    this.spinner.hide();

    this.route.queryParamMap.subscribe((params) => {
      if (params.has("bankLoad"))
        this.fromBankLoad = params.get("bankLoad") == 'true';
    });
    this.activetransaction = this.service.activetransaction;
    if (this.activetransaction === true) {
      this.transactionAmount = this.service.transactionData.amount;
      this.goldAmount = this.service.transactionData.gold;  
    }

    // this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      //Utility.log(res)
      this.currentBalance = res[0].status.availableBalance;
      this.service.currentBalance = this.currentBalance;
      this.currencyType = res[0].account.type.currency.symbol;

      const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(5).toString().split(".");
      this.goldWhole = sumGoldParts[0];
      this.goldFraction = sumGoldParts[1];

      this.service.userAccount = res[0].account;
    },
    (err) => {
      Utility.log(err);
      // this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {

      // function getAccNumber(element, index, array) { 
      //     Utility.log(element.internalName);
      //     if (element.internalName == 'AccNumber') 
      //       return index;
      // }

      // Utility.log(res);
      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber").value;      
      //var accnum = res.customValues.filter(getAccNumber);
      // for (var i=0; i < accnum.length; i++){
      //   Utility.log(accnum[i].value);
      // }
      // Utility.log('accnum : ' + accnum[0].value);
      // this.cardNumber = res.customValues[3].value;
      
      // if (accnum.length > 0)
      //   this.cardNumber = accnum[0].value ? accnum[0].value : ''
    },
    (err) => {
      Utility.log(err);
      // this.service.logout();
    });   
  }
  
  async doAddBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //Utility.log("click confirm");
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
      await this.service.sendAddBankLoad({
      bankId: bankFormName,
      bankAccName: bankFormAccName,
      bankAccNumber: bankFormAccNumber
    }).toPromise().then(() => {
      this.spinner.hide();
      this.ngPopups.alert('Your bank load details has been sucessfully added!');

      if (this.fromBankLoad)
        this.router.navigate(['bankload']);
      else
        this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.spinner.hide();
      this.ngPopups.alert('There was an error in your submission!');
    });  
  }}

}
