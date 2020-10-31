import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html'
})
export class RecentTransactionsComponent implements OnInit {
  transactionList = [];
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.service.getAccountTransactionList().subscribe((res: any) => {
      this.transactionList = res.elements;
      // console.log(res);
    },
    (err) => {
      this.service.logout();
      console.log(err);
    });
  }
}
