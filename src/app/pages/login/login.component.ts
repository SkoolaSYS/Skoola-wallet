import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Services } from '../../services/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {

    constructor(public services: Services, private router: Router) { }

  ngOnInit(): void {
    if (this.services.isLoggedIn())
    {
      this.router.navigate(['dashboard']);
    }
  }

}
