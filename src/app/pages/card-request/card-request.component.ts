import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { NgxSpinnerService } from "ngx-spinner";
import { Utility } from 'src/utils';


@Component({
  selector: 'app-card-request',
  templateUrl: './card-request.component.html'
})
export class CardRequestComponent implements OnInit {
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount

  constructor(
    private service:Services,
    private ngPopups: NgPopupsService, 
    private router:Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.hide();
    this.activetransaction = this.service.activetransaction;
    if (this.activetransaction === true) {
      this.transactionAmount = this.service.transactionData.amount;
      this.goldAmount = this.service.transactionData.gold;  
    }

    // this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      //Utility.log(res)
      this.currentBalance = res[0].status.availableBalance;
      this.service.currentBalance = this.currentBalance;
      this.currencyType = res[0].account.type.currency.symbol;

      const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(5).toString().split(".");
      this.goldWhole = sumGoldParts[0];
      this.goldFraction = sumGoldParts[1];

      this.service.userAccount = res[0].account;
    },
    (err) => {
      Utility.log(err);
      // this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {
      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber")?.value; 
    },
    (err) => {
      Utility.log(err);
      // this.service.logout();
    });
  }

  async requestCard(){
    const currentUser: any = await this.service.currentUser;
    try{
      currentUser.customValues.find(object => object.internalName == "address").value;
      try{
        currentUser.customValues.find(object => object.internalName == "postalCode").value;
        try{
          currentUser.customValues.find(object => object.internalName == "city").value;
          this.spinner.show();
          await this.service.requestCard().toPromise().then(() => {
            this.spinner.hide();
            this.ngPopups.alert('You have succesfully request a D8-p Card!',{theme: 'material', title: 'Success!'});
            this.router.navigate(['dashboard']);
          });
        }catch(e){
        Utility.log("City")
        this.ngPopups.alert('Update your City',{theme: 'material', title: 'Oops...'});
        this.router.navigate(["update-profile"]);
        }
       }catch(e){
        Utility.log("postalCode")
        this.ngPopups.alert('Update your Postal Code',{theme: 'material', title: 'Oops...'});
        this.router.navigate(["update-profile"]);
       } 
    }catch(e){
      Utility.log("address")
      this.ngPopups.alert('Update your Residence Address',{theme: 'material', title: 'Oops...'});
      this.router.navigate(["update-profile"]);
    }
    
  }
}
