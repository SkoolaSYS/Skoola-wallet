import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SignupComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
