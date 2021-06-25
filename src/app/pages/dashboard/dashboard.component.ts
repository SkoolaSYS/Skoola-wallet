import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DashboardComponent implements OnInit {

  constructor(private services: Services, private router: Router) { }

  ngOnInit(): void {

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
