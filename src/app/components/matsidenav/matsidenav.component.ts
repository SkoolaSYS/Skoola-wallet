import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
// import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-matsidenav',
  templateUrl: './matsidenav.component.html',
})
export class MatsidenavComponent implements OnInit {
  // Image & IDVerification
  public imageSrc: any = "assets/icons-img/user-dp.png";
  public isNotIdVerified: boolean = false;
  public requestCard: boolean;
  public bankData: boolean;
  public allowWithdrawal: boolean;
  public bankLoadData: boolean;
  public isMerchant:boolean;
  @ViewChild('sidenav') public sidenav:MatSidenav;
 

  constructor(
    private services: Services,
    private router: Router) { }

  ngOnInit(): void {
    // Kalau ID sudah verified, function ni akan "disabled". refer line 16 stated false
    this.services.getProfileData().subscribe(async (res: any) => {
      const currentUser: any = await this.services.currentUser;
      this.allowWithdrawal = currentUser.allowWithdrawal;
      this.isMerchant = currentUser.merchant;
      this.isNotIdVerified = this.isUserIdNotVerified(currentUser);
      this.bankLoadData = currentUser.bankLoad;

      // Request D8P Card visible for non-registered card user.
      this.requestCard = currentUser.requestCard;

    },
    (err) => {
      console.log(err);
    });
    //check if user already register bank or not
    this.services.getMemberBankData().subscribe((res: any)=>{
      if (res == null){
        this.bankData = false;
      }
      else{
      this.bankData = true;
      }
    },
    (err) => {
      console.log(err);
    });
    
    
  }

 

  // ini utk log out dari pwa
  logout(): void {
    this.services.logout();
    this.router.navigate(['login']);
  }

  async doRoute(): Promise<void> {
    const currentUser: any = await this.services.currentUser;

    // Only merchants are allowed to make withdrawal.
    if (currentUser.allowWithdrawal)
      this.router.navigate(['withdraw']);
  }

  // kalau user belum verified
  isUserIdNotVerified(user: any) : boolean {
    return user.idVerifiedStatus === 'Unverified';
  }



}
