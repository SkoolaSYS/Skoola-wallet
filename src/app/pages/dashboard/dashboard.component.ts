import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DashboardComponent implements OnInit {
  constructor(
    ) { }

  ngOnInit(): void {

  }
}
