import { Component, OnInit, OnDestroy } from '@angular/core';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html'
})
export class DashboardHeaderComponent implements OnInit, OnDestroy {
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount
  
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.activetransaction = this.service.activetransaction;
    if (this.activetransaction === true) {
      this.transactionAmount = this.service.transactionData.amount;
      this.goldAmount = this.service.transactionData.gold;  
    }

    // this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      this.currentBalance = res[0].status.availableBalance;
      this.currencyType = res[0].account.type.currency.symbol;

      const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(4).toString().split(".");
      this.goldWhole = sumGoldParts[0];
      this.goldFraction = sumGoldParts[1];

      this.service.userAccount = res[0].account;
    },
    (err) => {
      console.log(err);
      this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {

      function getAccNumber(element, index, array) { 
          console.log(element.internalName);
          if (element.internalName == 'AccNumber') 
            return index;
      }

      // console.log(res);
      this.userName = res.name;      
      var accnum = res.customValues.filter(getAccNumber);
      console.log(res);
      // for (var i=0; i < accnum.length; i++){
      //   console.log(accnum[i].value);
      // }
      // console.log('accnum : ' + accnum[0].value);
      // this.cardNumber = res.customValues[3].value;
      
      if (accnum.length > 0)
        this.cardNumber = accnum[0].value ? accnum[0].value : ''
    },
    (err) => {
      console.log(err);
      this.service.logout();
    });

    
  }
  
  ngOnDestroy(): void {
    this.service.activetransaction = false;    
  }
}
