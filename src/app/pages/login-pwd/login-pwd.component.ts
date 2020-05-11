import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';

@Component({
  selector: 'app-login-pwd',
  templateUrl: './login-pwd.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginPwdComponent implements OnInit {
  pwd: string;
  constructor() { }

  ngOnInit(): void {
  }

}
