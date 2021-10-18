import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-mini-dashboard-header',
  templateUrl: './mini-dashboard-header.component.html',
  styleUrls: ['./mini-dashboard-header.component.scss']
})
export class MiniDashboardHeaderComponent implements OnInit {
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount
  counter:number;
  condition: any;

  constructor(private service: Services,private router:Router) { }

  async ngOnInit():Promise <void> {
    //bell notification start
    const currentUser: any = await this.service.currentUser;
    if (currentUser.id.toString() in localStorage) {
      let data = localStorage.getItem(currentUser.id.toString());
      let obj;
      try {
        obj = JSON.parse(data);
        console.log("counter:", obj.counter);

        // update notification badge
        this.service.counter = obj.counter;
      }
      catch (e) {
        console.log(e);         
      }

    }
    else{
      this.service.counter = 0;
    }
    this.counter = this.service.counter
    if(this.counter >= 1){
      this.condition = true;
    }
    //bell notification end
    this.activetransaction = this.service.activetransaction;
    if (this.activetransaction === true) {
      this.transactionAmount = this.service.transactionData.amount;
      this.goldAmount = this.service.transactionData.gold;  
    }
        // this.activetransaction = true;
        this.service.getAccountBalance().subscribe((res: any) => {
          //console.log(res)
          this.currentBalance = res[0].status.availableBalance;
          this.service.currentBalance = this.currentBalance;
          this.currencyType = res[0].account.type.currency.symbol;
    
          const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(5).toString().split(".");
          this.goldWhole = sumGoldParts[0];
          this.goldFraction = sumGoldParts[1];
    
          this.service.userAccount = res[0].account;
        },
        (err) => {
          console.log(err);
          this.service.logout();
        });
    
        this.service.getProfileData().subscribe((res: any) => {
    
          // function getAccNumber(element, index, array) { 
          //     console.log(element.internalName);
          //     if (element.internalName == 'AccNumber') 
          //       return index;
          // }
    
          // console.log(res);
          this.userName = res.name;
          this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber").value;      
          //var accnum = res.customValues.filter(getAccNumber);
          // for (var i=0; i < accnum.length; i++){
          //   console.log(accnum[i].value);
          // }
          // console.log('accnum : ' + accnum[0].value);
          // this.cardNumber = res.customValues[3].value;
          
          // if (accnum.length > 0)
          //   this.cardNumber = accnum[0].value ? accnum[0].value : ''
        },
        (err) => {
          this.service.logout();
          console.log(err);
        });
  }
  async bell(): Promise <void>{
    if(this.router.url != "/recent-transactions"){
      this.router.navigate(['recent-transactions']);

      this.service.counter = 0;

      // write to storage
      const data = {
        counter: this.service.counter
      }

      const currentUser: any = await this.service.currentUser;
      localStorage.setItem(currentUser.id.toString(), JSON.stringify(data));
    }
    else{
      this.router.navigate(['dashboard']);
    }
  }
  
}
