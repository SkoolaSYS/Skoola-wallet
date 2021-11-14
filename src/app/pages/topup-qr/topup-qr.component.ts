import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-topup-qr',
  templateUrl: './topup-qr.component.html',
  styleUrls: ['./topup-qr.component.scss']
})
export class TopupQrComponent implements OnInit {
  href:any
  constructor(private services:Services, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    //this.href = "https://192.168.101.5:4200/#/topup-info?id="+currentUser.id.toString()+"&amount="+this.services.amountTopup
    //this.href = "https://komepsdev.ddns.net/#/topup-info?id="+currentUser.id.toString()+"&amount="+this.services.amountTopup
    this.href = "https://pwa.komeps.com/#/topup-info?id="+currentUser.id.toString()+"&amount="+this.services.amountTopup
  }

}
