import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cimbbank-transaction',
  templateUrl: './cimbbank-transaction.component.html',
})
export class CimbbankTransactionComponent implements OnInit {

  constructor() { }
  @Input() sender: string;
  @Input() amount: string;

  ngOnInit(): void {
  }

}
