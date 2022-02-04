import { Component, OnInit} from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DashboardComponent implements OnInit {
  public imageSrc: any = "assets/icons-img/user-dp.png";
  public isNotIdVerified: boolean = false;
  public allowWithdrawal: boolean;
  public isMerchant:boolean;
  public isRedeem:boolean;
  public isPledge:boolean;
  public isPledgeProvider:boolean;
  public isProvider: boolean;
  btnAdd: any;
  app: any;
  constructor(private services: Services, private router: Router, private ngPopups: NgPopupsService) {}

  ngOnInit(): void {
    this.services.getProfileData().subscribe(async (res: any) => {
      const currentUser: any = await this.services.currentUser;
      this.isNotIdVerified = this.isUserIdNotVerified(currentUser);
      this.allowWithdrawal = currentUser.allowWithdrawal;
      this.isMerchant = currentUser.merchant;
      this.isRedeem = currentUser.redeem;
      this.isPledge = currentUser.pledge;
      this.isPledgeProvider = currentUser.pledgeProvider;
      this.isProvider = currentUser.provider;
      localStorage.setItem("parent", currentUser.parentId);

    },
    (err) => {
      // console.log(err);
    });

    // TODO: To to decide whether we want to display profile image on side-nav bar.
    // // If user has only 3 images, it means the user has not uploaded a profile image
    // if (currentUser.images && currentUser.images.length != 3) {
    //   this.imageSrc = Utility.rebaseImageUrl(currentUser.images[0].thumbnailUrl);
    // }
    
    
  }
  logout(): void {
    this.services.logout();
    this.router.navigate(['login']);
  }

  async doRoute(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    // Only merchants are allowed to make withdrawal.
    if (currentUser.allowWithdrawal){
      if (!currentUser.addBank){
      this.router.navigate(['withdraw']);
      }else{
        this.router.navigate(['add-bank']);
        }
    }else{
      this.router.navigate(['topup-amount']);
    }
  }
  async doBankLoad(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    // console.log(currentUser)

    if (currentUser.bankLoad){
      this.router.navigate(['bankload']);
    }else{
      this.router.navigate(['add-bank-load'], { queryParams: { bankLoad: true } });
    }
    
  }

  isUserIdNotVerified(user: any) : boolean {
    return user.idVerifiedStatus === 'Unverified';
  }

  redeem(): void{
    if(this.isRedeem){
      this.services.redeemQr= true;
      this.router.navigate(['topup-qr'])
    }
    else{
      this.router.navigate(['redeem'])
    }
  }
  pledge(): void{
    if(this.isPledge || this.isPledgeProvider || this.isProvider){
      // this.services.pledgeList= true;
      this.router.navigate(['pledge-list'])
    }
    else{
      this.router.navigate(['pledge'])
    }
  }
}
