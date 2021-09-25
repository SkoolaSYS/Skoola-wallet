import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-update-bank-load',
  templateUrl: './update-bank-load.component.html'
})
export class UpdateBankLoadComponent implements OnInit {
  banks:any = [];
  bankData:any = [];
  bankFormCountry = "MY";
  bankFormName;
  bankFormAccName;
  bankFormAccNumber;
  bankObject;
  i: Number;
  constructor(private services:Services, private ngPopups: NgPopupsService, private router:Router) { }

  async ngOnInit(): Promise<void> {
    
    await this.services.getMemberBankLoadData().subscribe((res: any) => {
      this.bankData = res;
      this.bankFormAccName = this.bankData.bankAccName
      this.bankFormAccNumber= this.bankData.bankAccNumber
      //console.log(res);
    });
    await this.services.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks[0] = res[0]
      this.banks[1] = res[1]
      this.banks[2] = res[6]
      this.bankObject = this.banks.find(bank=>bank.name === this.bankData.bankName);
      if (this.bankObject != null){
          this.bankFormName = this.bankObject.id
      }
      //console.log(res);
    });
  
  }
  async doUpdateBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //console.log("click confirm");
    if (bankFormName != null && bankFormAccName != null && bankFormAccNumber != null){
      await this.services.sendUpdateBankLoad({
      bankId: bankFormName,
      bankAccName: bankFormAccName,
      bankAccNumber: bankFormAccNumber
    }).toPromise().then(() => {
      this.ngPopups.alert('Your bank details has been sucessfully updated!');
      this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.ngPopups.alert('There was an error in your submission!');
    });  
  }}

}
