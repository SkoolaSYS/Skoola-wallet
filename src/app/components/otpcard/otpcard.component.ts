import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Services } from '../../services/service';

@Component({
  selector: 'app-otpcard',
  templateUrl: './otpcard.component.html'
})
export class OtpcardComponent implements OnInit {
  otp: number;
  @Output() otpSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() isFavourite: boolean;
  @Output() saveFavourite: boolean = false;

  constructor(private service: Services) {
  }

  ngOnInit(): void {}
  
}
