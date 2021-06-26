import { Component, Input, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DashboardComponent implements OnInit {
  private imageSrc: any = "assets/icons-img/user-dp.png";

  constructor(private services: Services, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    
    if (currentUser.images) {
      this.imageSrc = Utility.rebaseImageUrl(currentUser.images[0].thumbnailUrl);
    }
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
}
