import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html'
})
export class UpdateBankComponent implements OnInit {
  banks:any = [];
  bankData:any = [];
  bankFormCountry = "MY";
  bankFormName;
  bankFormAccName;
  bankFormAccNumber;
  bankObject;
  i: Number;
  constructor(private services:Services, private ngPopups: NgPopupsService, private router:Router) { }

  ngOnInit(): void {
    
    this.services.getMemberBankData().subscribe((res: any) => {
      this.bankData = res;
      this.bankFormAccName = this.bankData.bankAccName
      this.bankFormAccNumber= this.bankData.bankAccNumber
      //console.log(res);
  });
    this.services.getBankData(this.bankFormCountry).subscribe((res: any) => {
      this.banks = res;
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
      await this.services.sendUpdateBank({
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

