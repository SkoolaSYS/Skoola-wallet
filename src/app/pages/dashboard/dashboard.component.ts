import { Component, OnInit} from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { HttpClient } from '@angular/common/http';
import { MayaService } from 'src/app/projects/maya/maya.service';


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
  public isRecycle:boolean;
  public isParent: boolean = false;
  public currentUser: any;
  btnAdd: any;
  app: any;
  constructor(private services: Services, private router: Router, private ngPopups: NgPopupsService, private http: HttpClient, private mayaService: MayaService) {}

  ngOnInit(): void {
    this.services.getProfileData().subscribe(
      async (res: any) => {
        const currentUser: any = await this.services.currentUser;
        this.currentUser = currentUser;

        console.log('PROFILE RESPONSE:', res);
        console.log('CURRENT USER:', currentUser);
        console.log('CURRENT USER ID:', currentUser.id);
        console.log('CURRENT USER EMAIL:', currentUser.email);
        console.log('PARENT ID:', currentUser.parentId);

        if (currentUser.email) {

        this.mayaService
          .checkSchoolParentByEmail(currentUser.email)
          .subscribe(
            (response: any) => {

              console.log(
                'SCHOOL PARENT CHECK:',
                response
              );

              if (response.isSchoolParent === true) {

                console.log(
                  'Redirecting to school dashboard'
                );

                localStorage.setItem(
                  'school-parent',
                  JSON.stringify(response.parent)
                );

                this.router.navigate([
                  'school-dashboard'
                ]);

                return;
              }

            },
            (error) => {
              console.error(
                'School parent check failed:',
                error
              );
            }
          );
      }

        this.isNotIdVerified =
          this.isUserIdNotVerified(currentUser);

        this.allowWithdrawal =
          currentUser.allowWithdrawal;

        this.isMerchant =
          currentUser.merchant;

        this.isRedeem =
          currentUser.redeem;

        this.isPledge =
          currentUser.pledge;

        this.isPledgeProvider =
          currentUser.pledgeProvider;

        this.isProvider =
          currentUser.provider;

        this.isRecycle =
          currentUser.recycle;

        // Parent exists when parentId has a value
        this.isParent = !!currentUser.parentId;

        console.log('FINAL isParent:', this.isParent);

        if (currentUser.parentId) {
          localStorage.setItem(
            'parent',
            currentUser.parentId.toString()
          );
        } else {
          localStorage.removeItem('parent');
        }
      },
      (err) => {
        console.error('Failed to load profile:', err);
      }
    );
  }

  openMarketplace(): void {
    window.open('https://murbaltl.com', '_blank');
  }

  openSchoolChat(): void {
    if (!this.currentUser || !this.currentUser.email) {
      console.error('Current user email was not found');
      this.ngPopups.alert('Unable to identify your account email.');
      return;
    }

    const email = encodeURIComponent(this.currentUser.email);

    const chatUrl =
      'http://localhost:4300/chat?email=' + email;

    window.open(chatUrl, '_blank');
  }

  openAttendance(): void {
    if (!this.currentUser || !this.currentUser.email) {
      this.ngPopups.alert('Unable to identify your email.');
      return;
    }

    const email = this.currentUser.email;

    this.http.post<any>(
      'http://localhost:5000/my3sss-login',
      { email: email }
    ).subscribe(
      response => {
        if (!response.loginUrl) {
          this.ngPopups.alert('Unable to open attendance.');
          return;
        }

        window.open(response.loginUrl, '_blank');
      },
      error => {
        console.error('My3SSS login error:', error);

        this.ngPopups.alert(
          error.error?.message ||
          'Unable to connect to My3SSS.'
        );
      }
    );
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
    // (currentUser)

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
