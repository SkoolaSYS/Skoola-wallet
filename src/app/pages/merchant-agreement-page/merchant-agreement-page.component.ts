import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-merchant-agreement-page',
  templateUrl: './merchant-agreement-page.component.html'
})
export class MerchantAgreementPageComponent implements OnInit {

  constructor(private router: Router, private services: Services) { }
  
  isNotIdVerified: boolean
  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;
    this.isNotIdVerified = this.isUserIdNotVerified(currentUser);
  }

  toMerchCert(){
    localStorage.setItem("agree-merch", "1");
    if (this.isNotIdVerified){
      this.router.navigate(['merchant-cert']);
    }else{
      this.router.navigate(['dashboard']);
    }
    
  }

  isUserIdNotVerified(user: any) : boolean {
    return user.idVerifiedStatus === 'Unverified';
  }
}
