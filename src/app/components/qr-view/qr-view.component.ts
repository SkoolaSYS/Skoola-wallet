import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html'
})
export class qrViewComponent implements OnInit {
  @Input() buynearview: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }

}
