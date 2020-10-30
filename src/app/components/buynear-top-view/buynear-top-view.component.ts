import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buynear-top-view',
  templateUrl: './buynear-top-view.component.html'
})
export class BuynearTopViewComponent implements OnInit {
  constructor() { }
  @Input() sender: string;
  @Input() amount: string;
  ngOnInit(): void {
  }

}
