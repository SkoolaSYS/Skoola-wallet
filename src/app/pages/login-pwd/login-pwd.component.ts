import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from '../../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pwd',
  templateUrl: './login-pwd.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginPwdComponent implements OnInit {
  constructor(public services: Services, private router: Router) { }

  ngOnInit(): void {
    if (this.services.isLoggedIn())
    {
      this.router.navigate(['dashboard']);
    }
    if (!this.services.username) {
      this.router.navigate(['login']);
    }
  }
  async submit(): Promise<void> {
    const res = await this.services.login(this.services.username, this.services.password).toPromise();
    this.router.navigate(['dashboard']);
  }

}
