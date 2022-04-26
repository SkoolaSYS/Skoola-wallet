import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-topup-amount',
  templateUrl: './topup-amount.component.html',
  styleUrls: ['./topup-amount.component.scss']
})
export class TopupAmountComponent implements OnInit {
  amountTopup:any
  constructor(private services:Services, private router: Router, private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
  }
  confirm(): void{
    try{
      if (this.amountTopup.length > 0){
        this.services.amountTopup = this.amountTopup
        this.router.navigate(['topup-qr']);
      }else{
        this.ngPopups.alert('Insufficient amount in topup...',{theme:'material',title:'Oops...'})
      }
    }catch{
      this.ngPopups.alert('Insufficient amount in topup...',{theme:'material',title:'Oops...'})
    }
    this.services.amountTopup = this.amountTopup
    this.services.qrgenerate = false;
    this.services.redeemQr = false;
    this.router.navigate(['topup-qr']);
  }
}
