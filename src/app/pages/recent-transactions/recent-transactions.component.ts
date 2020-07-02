import { Component, OnInit } from '@angular/core';
import { Services } from '../services/service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html'
})
export class RecentTransactionsComponent implements OnInit {
  transactionList = [];
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.service.getAccountTransactionList().subscribe((res: any) => {
      console.log(res);
      this.transactionList = res.elements;
    },
    (err) => {
      console.log(err);
    });
  }

}
