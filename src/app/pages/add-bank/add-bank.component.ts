
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html'
})
export class AddBankComponent implements OnInit {
  banks:any = [];
  bankFormCountry = "MY";
  bankFormName = null;
  bankFormAccName;
  bankFormAccNumber;
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount
  constructor(private service:Services, private ngPopups: NgPopupsService, 
              private router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks = res;
      //console.log(this.banks);
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

      // function getAccNumber(element, index, array) { 
      //     console.log(element.internalName);
      //     if (element.internalName == 'AccNumber') 
      //       return index;
      // }

      // console.log(res);
      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber").value;      
      //var accnum = res.customValues.filter(getAccNumber);
      // for (var i=0; i < accnum.length; i++){
      //   console.log(accnum[i].value);
      // }
      // console.log('accnum : ' + accnum[0].value);
      // this.cardNumber = res.customValues[3].value;
      
      // if (accnum.length > 0)
      //   this.cardNumber = accnum[0].value ? accnum[0].value : ''
    },
    (err) => {
      console.log(err);
      // this.service.logout();
    });   
  }
  
  async doAddBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //console.log("click confirm");
    this.spinner.show();

    if (bankFormName != null && bankFormAccName != null && bankFormAccNumber != null){
      await this.service.sendAddBank({
      bankId: bankFormName,
      bankAccName: bankFormAccName,
      bankAccNumber: bankFormAccNumber
    }).toPromise().then(() => {
      this.spinner.hide();
      this.ngPopups.alert('Your bank details has been sucessfully added!');
      this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.spinner.hide();
      this.ngPopups.alert('There was an error in your submission!');
    });  
  }}
}

