import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-pledge-details',
  templateUrl: './pledge-details.component.html'
})
export class PledgeDetailsComponent implements OnInit {
  currentUser: any;
  senderImg: string = "";
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
    await this.services.pledgeDetails({
      pledgeProvider : this.services.pledgeGold.pledgeProvider,
      pledgeAmount   : this.services.pledgeGold.pledgeAmount,
      pledgeReference: this.services.pledgeGold.pledgeReference,
      pledgeCharge   : this.services.pledgeGold.pledgeCharge,
      pledgeFinancing: this.services.pledgeGold.pledgeFinancing,
      chargeProvider : this.services.pledgeGold.chargeProvider
      
  }).toPromise().then(() => {
    this.router.navigate(['dashboard']);
  });
}

}
