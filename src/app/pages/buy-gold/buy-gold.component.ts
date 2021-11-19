import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-buy-gold',
  templateUrl: './buy-gold.component.html'
})
export class BuygoldComponent implements OnInit {
  sellGoldData: any = [];
  data: any[] = []; 
  goldAmount: number;
  goldPrice: number;
  goldId: string;
  chosenGold: any;
  order:boolean;
  goldAverage: number;
  goldAvg:number;
  sign: any;
  average: number;
  

  constructor(private services:Services, private ngPopups: NgPopupsService, private router:Router) { 
   
  }

  async ngOnInit(): Promise<void> {
  this.services.calAvgGold().subscribe((res: any) => {
   this.goldAverage = res.goldAverage.toFixed(2).toString();
  // this.goldAverage = 100;
  })
  this.order = false;
  this.services.getSellGoldData(false).subscribe((res: any) => {
    this.sellGoldData = res;
    console.log(this.sellGoldData);
   
    for(var i = 0; i< this.sellGoldData.amount.length; i++){
      
      this.average = Math.round(this.sellGoldData.price[i]/this.sellGoldData.amount[i])
      if(this.average > this.goldAverage){
        this.sign = ">";
      }
      else if(this.average < this.goldAverage){
        this.sign = "<";
      }
      else{
        this.sign = "=";
      } 
      this.data.push([{
        goldAmount : this.sellGoldData.amount[i],
        goldPrice : this.sellGoldData.price[i],
        goldId : this.sellGoldData.goldID[i],
        sign : this.sign
        
      }])    
      }
    });
  
  }
  clickButton(value: number){
    
    this.router.navigate(['gold-to-purchase'], { queryParams: { value: value} });
  }

  sort(order: boolean) {
    this.services.getSellGoldData(order).subscribe((res: any) => {
      this.sellGoldData = res;
      console.log(this.sellGoldData);
      this.data= [];
        for(var i = 0; i< this.sellGoldData.amount.length; i++){

          this.average = Math.round(this.sellGoldData.price[i]/this.sellGoldData.amount[i])
          if(this.average > this.goldAverage){
            this.sign = ">";
          }
          else if(this.average < this.goldAverage){
            this.sign = "<";
          }
          else{
            this.sign = "=";
        }
        this.data.push([{
          goldAmount : this.sellGoldData.amount[i],
          goldPrice : this.sellGoldData.price[i],
          goldId : this.sellGoldData.goldID[i],
          sign : this.sign
        }]);
        }
      });
  }
  
}


