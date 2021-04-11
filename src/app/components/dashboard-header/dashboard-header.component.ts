import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html'
})
export class DashboardHeaderComponent implements OnInit {
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;

  constructor(private service: Services) { }

  ngOnInit(): void {
    this.activetransaction = this.service.activetransaction;
    // this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      this.currentBalance = res[0].status.availableBalance;
      this.currencyType = res[0].account.type.currency.symbol;
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

      // for (var i=0; i < accnum.length; i++){
      //   console.log(accnum[i].value);
      // }
      // console.log('accnum : ' + accnum[0].value);
      // this.cardNumber = res.customValues[3].value;
      this.cardNumber = accnum[0].value ? accnum[0].value : '00000000'
    },
    (err) => {
      console.log(err);
      this.service.logout();
    });
  }   
}
