import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-otpcard',
  templateUrl: './otpcard.component.html'
})
export class OtpcardComponent implements OnInit {
  otp: number;
  @Output() otpSubmit: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
