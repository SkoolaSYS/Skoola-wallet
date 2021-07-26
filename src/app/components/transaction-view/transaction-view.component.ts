import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html'
})
export class TransactionViewComponent implements OnInit {
  constructor() { }
  @Input() sender: string;
  @Input() amount: string;
  @Input() image: string;
  @Input() transactionFee: string;
  @Input() goldAmount: string;

  ngOnInit(): void {
  }

}
