import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
})
export class RedeemComponent implements OnInit {
  amountRedeem
  serviceRedeem
  centreRedeem
  dateRedeem
  referenceRedeem
  sumGold
  priceGold
  amountBalance
  currentDate
  chosenDate
  public isMerchant:boolean;
  redeemProvider:any = [];
  redeemCenter:any = [];
  redeemCurrent
  totalAmount

  constructor(private services:Services, private router:Router, private ngPopups: NgPopupsService) { }


  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant

    this.services.redeemProvider().subscribe((res: any) => {
      this.redeemProvider = res.serviceRedeem
      this.redeemCurrent = res.currentRedeem
      // console.log(this.redeemCurrent)
    })
    
  }
  redemptionCenter():void{
    this.services.redeemCenter(this.serviceRedeem).subscribe((res: any) => {
      this.redeemCenter = res.centreRedeem;
    })
  }
  async redeem(amountRedeem:string,serviceRedeem:string,centreRedeem:string,dateRedeem:any,referenceRedeem:string ) {
    if(amountRedeem != null && serviceRedeem != null && centreRedeem != null && dateRedeem != null && referenceRedeem != null){
      let stringDate: string = dateRedeem.day+"-"+dateRedeem.month+"-"+dateRedeem.year;
      await this.services.redeemComponent({
        amountRedeem: this.amountRedeem,
        serviceRedeem: this.serviceRedeem,
        centreRedeem: this.centreRedeem,
        dateRedeem: stringDate,
        referenceRedeem: this.referenceRedeem
        
      }).toPromise().then(() => {
      this.totalAmount = this.amountRedeem % this.redeemCurrent
      if(this.totalAmount > 0){
        this.ngPopups.alert('Your gold amount is invalid!');
      }
      else{
      this.services.getAccountBalance().subscribe((res:any)=>{
        //check gold balance
        this.sumGold = parseFloat(res[0].gold.sumGoldAmount.toFixed(5));
        this.amountRedeem = parseFloat(this.amountRedeem);
        if(this.sumGold < this.amountRedeem){
          this.ngPopups.alert('Your gold is not enough!');
        }
        else{
        //check amount balance
        this.amountBalance = parseFloat(this.services.currentBalance);
          this.priceGold = parseFloat(this.services.redeemGold.chargeRedeem)
          if(this.amountBalance < this.priceGold){
            this.ngPopups.alert('The balance in your account is not sufficient to cover the transaction fee!');
          }
          else{
            this.currentDate = Utility.formatDate(new Date());
            var date = new Date();
            var day = date.getUTCDate();
            var month = date.getUTCMonth() + 1;
            var year = date.getUTCFullYear();
            console.log(month);
            console.log("chosenDate: "+ dateRedeem.year + dateRedeem.month + dateRedeem.day);
            console.log("currentDate: " + year + month + day);
            if((dateRedeem.year < year) || (dateRedeem.month < month) || (dateRedeem.day <= day)){
              this.ngPopups.alert('Your date must after ' + this.currentDate)
            }
            else{
              this.router.navigate(['redeem-details']);
            }
          }
        }
      });
      
    }
  })
}}
}
