import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buygold-top-view',
  templateUrl: './buygold-top-view.component.html'
})
export class BuygoldTopViewComponent implements OnInit {
  constructor() { }
  @Input() sender: string;
  @Input() amount: string;
  ngOnInit(): void {
  }

}
