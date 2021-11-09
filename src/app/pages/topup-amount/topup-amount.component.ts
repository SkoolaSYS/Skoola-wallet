import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-topup-amount',
  templateUrl: './topup-amount.component.html',
  styleUrls: ['./topup-amount.component.scss']
})
export class TopupAmountComponent implements OnInit {
  amountTopup:any
  constructor(private services:Services, private router: Router) { }

  ngOnInit(): void {
  }
  confirm(): void{
    console.log(this.amountTopup)
    this.services.amountTopup = this.amountTopup
    this.router.navigate(['topup-qr']);
  }
}
