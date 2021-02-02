import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';

@Component({
  selector: 'app-signup-details',
  templateUrl: './signup-details.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SignupDetailsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
