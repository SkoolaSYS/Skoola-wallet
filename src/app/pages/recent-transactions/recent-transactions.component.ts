import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/utils';
import { Services } from '../../services/service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html'
})
export class RecentTransactionsComponent implements OnInit {
  transactionList = [];
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
    this.service.getAccountTransactionList().subscribe((res: any) => {
      this.transactionList = res.elements;
      Utility.log(res);
    })
  }
}
