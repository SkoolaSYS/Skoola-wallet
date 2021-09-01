import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Services } from '../../services/service';
import { NgPopupsModule, NgPopupsService } from 'ng-popups';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {

    constructor(public services: Services, private router: Router,private ngPopups: NgPopupsService) { }

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
      const res = this.services.login(this.services.username, this.services.password).toPromise()
    
    if( this.services.forceChangePassword ) {
      this.ngPopups.alert('Credential Update. You need to change your credentials!');
       this.router.navigate(['update-username-pwd']);
     } else {
       this.router.navigate(['dashboard']);
     }
  }

}
