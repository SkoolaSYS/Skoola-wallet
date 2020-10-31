import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sellgold-top-view',
  templateUrl: './sellgold-top-view.component.html'
})
export class SellgoldTopViewComponent implements OnInit {
  buygold: boolean = true;
  constructor() { }
  @Input() sender: string;
  @Input() amount: string;
  ngOnInit(): void {
  }

}
