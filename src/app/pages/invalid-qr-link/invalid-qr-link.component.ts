import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid-qr-link',
  templateUrl: './invalid-qr-link.component.html',
  styleUrls: ['./invalid-qr-link.component.scss']
})
export class InvalidQrLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  qrcode(): void{
    window.location.href='./#/qr-code'
  }

}
