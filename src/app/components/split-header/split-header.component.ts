import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-split-header',
  templateUrl: './split-header.component.html',
  styleUrls: ['./split-header.component.scss']
})
export class SplitHeaderComponent implements OnInit, OnDestroy {
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
  topupBalance:any;
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
      this.topupBalance = res[0].status.topupBalance;
      this.service.topupBalance = this.topupBalance;
      const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(5).toString().split(".");
      this.goldWhole = sumGoldParts[0];
      this.goldFraction = sumGoldParts[1];

      this.service.userAccount = res[0].account;
    },
    (err) => {
      console.log(err);
      // this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {

      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber")?.value;      
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
      console.log(err);
      // this.service.logout();
    });

  }
  
  ngOnDestroy(): void {
    this.service.activetransaction = false;    
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

  tab1(): void{
    console.log(true)
    var content1 = document.getElementById('content1');
    var content3 = document.getElementById('content3');
    var btn1 = document.getElementById('btn1');
    var btn3 = document.getElementById('btn3');
    content1.style.transform='translateX(0px)';
    content3.style.transform='translateX(150%)';
    btn1.style.background = "#E2E3E3"
    btn1.style.color = "#54A5A6"
    btn3.style.background = "linear-gradient(180deg, #858585 0%, #303030 100%)"
    btn3.style.color = "#fff"
    window.location.href='./#/dashboard'
  }

   tab3(): void{
    var content1 = document.getElementById('content1');
    var content3 = document.getElementById('content3');
    var btn1 = document.getElementById('btn1');
    var btn3 = document.getElementById('btn3');
    content3.style.transform='translateX(0px)';
    content1.style.transform='translateX(150%)';
    btn3.style.background = "#E2E3E3"
    btn3.style.color = "#54A5A6"
    btn1.style.background = "linear-gradient(180deg, #858585 0%, #303030 100%)"
    btn1.style.color = "#fff"
    window.location.href='./#/qr-code'
  }
  
  
}
