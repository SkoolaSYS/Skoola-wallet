import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopup, NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-card-request',
  templateUrl: './card-request.component.html'
})
export class CardRequestComponent implements OnInit {

  constructor(
    private services:Services,
    private ngPopups: NgPopupsService, 
    private router:Router) { }

  ngOnInit(): void {
  }

  async requestCard(){
    await this.services.requestCard().toPromise().then(() => {
      this.ngPopups.alert('You have succesfully request a D8-p Card!');
      this.router.navigate(['dashboard']);
    });
  }
}
