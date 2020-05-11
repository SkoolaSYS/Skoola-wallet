import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {
  mobileno: string;
  constructor() { }

  ngOnInit(): void {
  }

}
