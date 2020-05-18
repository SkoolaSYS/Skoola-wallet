import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otpcard',
  templateUrl: './otpcard.component.html'
})
export class OtpcardComponent implements OnInit {
  otp: number;
  constructor() { }

  ngOnInit(): void {
  }

}
