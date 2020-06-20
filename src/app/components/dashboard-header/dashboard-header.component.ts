import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html'
})
export class DashboardHeaderComponent implements OnInit {
  active_transaction: boolean;

  constructor() { }

  ngOnInit(): void {
    // this.active_transaction = false;
    this.active_transaction = true;
  }

}
