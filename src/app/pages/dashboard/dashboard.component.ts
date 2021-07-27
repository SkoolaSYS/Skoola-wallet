import { Component, OnInit} from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DashboardComponent implements OnInit {
  public imageSrc: any = "assets/icons-img/user-dp.png";
  public isNotIdVerified: boolean = false;

  constructor(private services: Services, private router: Router) {}

  ngOnInit(): void {

    this.services.getProfileData().subscribe(async (res: any) => {
      const currentUser: any = await this.services.currentUser;
      //console.log(currentUser);
      this.isNotIdVerified = this.isUserIdNotVerified(currentUser);
    },
    (err) => {
      console.log(err);
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
    if (currentUser.allowWithdrawal)
      this.router.navigate(['withdraw']);
  }

  isUserIdNotVerified(user: any) : boolean {
    return user.idVerifiedStatus === 'Unverified';
  }
}
