import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Services } from '../../services/service';
// import { User } from 'src/_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private router: Router,
  //   private authService: AuthService) { }

  //   loginForm: FormGroup;
  //   message: string;
  //   returnUrl: string;
  //   submitted: string;

    constructor(public services: Services, private router: Router) { }

  ngOnInit(): void {
    if (this.services.isLoggedIn())
    {
      this.router.navigate(['dashboard']);
    }
  //   this.loginForm = this.formBuilder.group({
  //     userid: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  //   this.returnUrl = '/login-pwd';
  //   this.authService.logout();
  // }

  // get f() { return this.loginForm.controls; }

  // doValidateUser() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }else {

  //   }
  }

}
