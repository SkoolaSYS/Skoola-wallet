import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-topup-info',
  templateUrl: './topup-info.component.html',
  styleUrls: ['./topup-info.component.scss']
})
export class TopupInfoComponent implements OnInit {
  amount:any
  receiverName:any
  merchantName:any
  memberId
  constructor(private services:Services, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    if (!currentUser.merchant){
      this.router.navigate(['dashboard']);
    }
    this.amount = this.router.url.split("?")[1].split("=")[2];
    this.services.loadById(this.router.url.split("?")[1].split("=")[1].split("&")[0]).subscribe((res: any) => {
      console.log(res);
      this.memberId= res.id;
      this.receiverName= res.name;
      this.merchantName= res.name;
    },
    (err) => {
      console.log(err);
      // this.services.logout();
    });
  }

  async confirm():Promise<void>{
    //const currentUser: any = await this.services.currentUser;
    //console.log(currentUser)
    if(this.services.currentBalance > parseFloat(this.amount)){
      await this.services.topupAtMerchant({
        amount: this.amount,
        memberId: this.memberId
      }).toPromise().then(() => {
        this.router.navigate(['dashboard']);
      }).catch((err) => {
        console.log(err)
      });
    }else{
      alert("not enough balance")
    }
  }
}
