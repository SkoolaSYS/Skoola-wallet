import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/service';

@Component({
  selector: 'app-bankload',
  templateUrl: './bankload.component.html',
})
export class BankloadComponent implements OnInit {

  // constructor() { }
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.service.opsTagging = 'bankload';
  }

}
