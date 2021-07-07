import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transfer-recipient',
  templateUrl: './transfer-recipient.component.html'
})
export class TransferRecipientComponent implements OnInit {
  constructor() { }
  @Input() receiver: string;
  @Input() amount: number;
  @Input() image: string;
  @Input() date: string;
  ngOnInit(): void {
  }

}
