import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-pledge-list-details',
  templateUrl: './pledge-list-details.component.html',
  styleUrls: ['./pledge-list-details.component.scss']
})
export class PledgeListDetailsComponent implements OnInit {
  currentUser: any;
  senderImg: string = "";
  value;
  pledgeFinancing;
  amountBalance;
  constructor(private services:Services,private router:Router,private ngPopups: NgPopupsService) { }

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.services.currentUser;
    try {
      if (this.currentUser.images && this.currentUser.images.length != 3)
        this.senderImg = Utility.rebaseImageUrl(this.currentUser.images[0].thumbnailUrl);
      }
    catch {
      // Reloading? go back to redeem gold page
      this.router.navigate(['pledge']);
    }
  }
  async otpSubmit(otp: string){
    await this.services.payPledge(this.services.idPledge).toPromise().then(() => {
      this.services.getAccountBalance().subscribe((res:any)=>{
        this.amountBalance = parseFloat(this.services.currentBalance);
        this.pledgeFinancing = parseFloat(this.services.idPledge.pledgeFinancing)
        if(this.amountBalance < this.pledgeFinancing){
          this.ngPopups.alert('Your balance in your account is not enough!');
        }
        else{
            this.router.navigate(['dashboard']);  
        }
    })
})
}

}
