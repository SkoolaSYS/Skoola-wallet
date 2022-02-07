import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html'
})
export class PledgeComponent implements OnInit {
  public isMerchant:boolean;
  pledgeProvider;
  pledgeFinancing;
  pledgeAmount;
  pledgeReference;
  goldPrice;
  currentGold;
  marhun;
  financing;
  chargeProvider;
  providerPledge:any = [];
  chargePledge:any = [];
  periodPledge:any = [];
  ratePledge:any = [];

  constructor(private services:Services, private router:Router, private ngPopups: NgPopupsService) { }

  async ngOnInit(): Promise<void> {

    
  }
  calculated(): void{
    this.services.calculatePledge(this.pledgeProvider).subscribe((res: any) => {
      this.chargePledge = res.charge;
      this.periodPledge = res.period;
      this.ratePledge = res.rate;
      this.goldPrice = res.goldPrice
    })
  }

  btnCalculate(): void{
    this.marhun = (this.pledgeFinancing * this.goldPrice).toFixed(3)
    this.financing = (this.marhun * (this.chargePledge/100)).toFixed(3)
  }

  balanceProvider(): void{
    this.services.pledgeProvider(this.pledgeAmount).subscribe((res: any) => { 
      this.providerPledge = res.serviceRedeem
      this.currentGold = res.currentRedeem
    })
  }

  agreementCheckbox(){
    var yesUpload = <HTMLInputElement> document.getElementById("checkAgree");
    if (yesUpload.checked==true){
      document.getElementById("btnConfirm").removeAttribute('disabled');
    }else{
      document.getElementById("btnConfirm").setAttribute('disabled','disabled');
    }
  }

  async pledge(){
    if(this.pledgeProvider != null && this.pledgeAmount != null && this.pledgeReference != null){
      await this.services.pledgeComponent({
        pledgeProvider : this.pledgeProvider,
        pledgeAmount   : this.pledgeAmount,
        pledgeReference: this.pledgeReference

      }).toPromise().then(() => {
        this.router.navigate(['pledge-details']);
      }) 
    }   
  }
}
