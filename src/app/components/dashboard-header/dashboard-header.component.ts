import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/pages/services/service';

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
    // this.activetransaction = false;
    this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      this.currentBalance = res[0].status.availableBalance;
      this.currencyType = res[0].account.type.currency.symbol;
      console.log(res);
    },
    (err) => {
      console.log(err);
    });

    this.service.getProfileData().subscribe((res: any) => {
      console.log(res);
      this.userName = res.name;
      this.cardNumber = res.customValues[4].value;
    },
    (err) => {
      console.log(err);
    });
  }
}
