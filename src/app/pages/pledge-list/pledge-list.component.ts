import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-pledge-list',
  templateUrl: './pledge-list.component.html',
  styleUrls: ['./pledge-list.component.scss']
})
export class PledgeListComponent implements OnInit {
public isMerchant:boolean;
public isPledge : boolean;
public isPledgeProvider: boolean;
pledgeGold: any;
data: any[] = [];
pledgeAmount;
pledgeFinancing;
pledgeProvider;
startDate;
endDate;
remaining;
start;
end;
listUser: any;
listProvider: any;

  constructor(private services:Services, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant;
    this.isPledge   = currentUser.pledge;
    this.isPledgeProvider= currentUser.pledgeProvider;
  if(this.isPledge){
    this.listUser = true;
    this.services.getPledgeList().subscribe((res:any) => {
    this.pledgeGold = res;
    for(var i = 0; i < this.pledgeGold.pledgeAmount.length; i++){
      
      this.data.push({
        pledgeProvider : this.pledgeGold.pledgeProvider[i],
        pledgeAmount   : this.pledgeGold.pledgeAmount[i],
        pledgeFinancing: this.pledgeGold.pledgeFinancing[i],
        startDate      : this.pledgeGold.startDate[i],
        endDate        : this.pledgeGold.endDate[i],
        remaining      : this.pledgeGold.remainingDays[i],
        pledgeId       : this.pledgeGold.pledgeId[i]

      })
    }
    })
  }
  else if(!this.isPledge && this.isPledgeProvider){
    this.services.getPledgeListProvider().subscribe((res:any) => {
      this.listProvider = true;
      this.pledgeGold = res;
      for(var i = 0; i < this.pledgeGold.pledgeAmount.length; i++){
        
        this.data.push({
          pledgeName     : this.pledgeGold.pledgeName[i],
          pledgeAmount   : this.pledgeGold.pledgeAmount[i],
          pledgeFinancing: this.pledgeGold.pledgeFinancing[i],
          startDate      : this.pledgeGold.startDate[i],
          endDate        : this.pledgeGold.endDate[i],
          remaining      : this.pledgeGold.remainingDays[i]
  
        })
      }
    })
  }
} 

  clickButton(value: number){
    this.router.navigate(['pledge-list-details'], { queryParams: { value: value} });
  }

}
